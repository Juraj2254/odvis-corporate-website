<?php
/**
 * Contact form endpoint for odvis.hr (PHP 8.1+, uses the host's mail()).
 *
 * - fetch() requests (Accept: application/json) get a JSON reply: {"ok": true|false}
 * - plain form posts (JavaScript off) are redirected to the "message sent" / "message failed" page
 */

declare(strict_types=1);

const RECIPIENT = 'info@odvis.hr';
const SENDER = 'no-reply@odvis.hr';           // must be an address on the site's own domain
const RATE_LIMIT = 5;                          // messages per IP …
const RATE_WINDOW = 600;                       // … per 10 minutes
const STATUS_PAGES = [
    'en' => ['sent' => '/contact/sent/', 'failed' => '/contact/error/'],
    'hr' => ['sent' => '/hr/kontakt/poslano/', 'failed' => '/hr/kontakt/greska/'],
];

header('X-Robots-Tag: noindex');
header('Cache-Control: no-store');

$wantsJson = str_contains($_SERVER['HTTP_ACCEPT'] ?? '', 'application/json');
$locale = ($_POST['locale'] ?? '') === 'hr' ? 'hr' : 'en';

function respond(bool $ok, int $status, string $error = ''): never
{
    global $wantsJson, $locale;
    if ($wantsJson) {
        http_response_code($status);
        header('Content-Type: application/json; charset=utf-8');
        echo json_encode($ok ? ['ok' => true] : ['ok' => false, 'error' => $error]);
    } else {
        header('Location: ' . STATUS_PAGES[$locale][$ok ? 'sent' : 'failed'], true, 303);
    }
    exit;
}

/** Single-line field: trimmed, control characters (incl. CR/LF) removed to prevent header injection. */
function line(string $key, int $max): string
{
    $value = trim((string) ($_POST[$key] ?? ''));
    $value = preg_replace('/[\x00-\x1F\x7F]+/u', ' ', $value) ?? '';
    return mb_substr($value, 0, $max);
}

function rateLimited(string $ip): bool
{
    $file = sys_get_temp_dir() . '/odvis-contact-' . hash('sha256', $ip);
    $now = time();
    $hits = is_file($file) ? array_filter(
        array_map('intval', explode(',', (string) file_get_contents($file))),
        static fn (int $t): bool => $t > $now - RATE_WINDOW,
    ) : [];
    if (count($hits) >= RATE_LIMIT) {
        return true;
    }
    $hits[] = $now;
    file_put_contents($file, implode(',', $hits), LOCK_EX);
    return false;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Allow: POST');
    respond(false, 405, 'method_not_allowed');
}

// Bots fill the hidden field; pretend everything went fine.
if (trim((string) ($_POST['company'] ?? '')) !== '') {
    respond(true, 200);
}

$name = line('name', 200);
$email = line('email', 254);
$message = trim(str_replace("\r\n", "\n", (string) ($_POST['message'] ?? '')));
$message = mb_substr($message, 0, 5000);

if ($name === '' || $message === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respond(false, 422, 'invalid_input');
}

if (rateLimited($_SERVER['REMOTE_ADDR'] ?? 'unknown')) {
    respond(false, 429, 'rate_limited');
}

$subject = ($locale === 'hr' ? 'Nova poruka s odvis.hr: ' : 'New message from odvis.hr: ') . $name;
$body = implode("\n", [
    "Ime / Name: {$name}",
    "E-pošta / Email: {$email}",
    'Jezik / Language: ' . strtoupper($locale),
    'Vrijeme / Time: ' . date('Y-m-d H:i:s T'),
    '',
    $message,
    '',
    '—',
    'Poslano putem kontakt obrasca na odvis.hr / Sent via the contact form on odvis.hr',
]);

$headers = [
    'From' => sprintf('%s <%s>', mb_encode_mimeheader('ODVIS web', 'UTF-8'), SENDER),
    'Reply-To' => sprintf('%s <%s>', mb_encode_mimeheader($name, 'UTF-8'), $email),
    'MIME-Version' => '1.0',
    'Content-Type' => 'text/plain; charset=UTF-8',
    'Content-Transfer-Encoding' => '8bit',
    'X-Mailer' => 'odvis.hr',
];

$sent = mail(RECIPIENT, mb_encode_mimeheader($subject, 'UTF-8'), $body, $headers, '-f' . SENDER);

respond($sent, $sent ? 200 : 500, $sent ? '' : 'mail_failed');
