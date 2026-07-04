export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => null)
    if (!body || !body.name || !body.email || !body.message) {
      return Response.json({ success: false, error: "Name, email and message are required." }, { status: 400 })
    }

    // Here you would typically send an email via a service like Resend, SendGrid, or AWS SES
    // For demonstration, we return success immediately.
    // Example integration:
    // await resend.emails.send({
    //   from: 'website@odvis.hr',
      //   to: ['info@odvis.hr'],
    //   subject: `New contact from ${body.name}`,
    //   text: `From: ${body.name} \u003c${body.email}\u003e\n\n${body.message}`,
    // })

    return Response.json({ success: true })
  } catch {
    return Response.json({ success: false, error: "Something went wrong." }, { status: 500 })
  }
}