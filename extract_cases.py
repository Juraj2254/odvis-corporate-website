from pypdf import PdfReader
from pathlib import Path
import re
import os
from PIL import Image

root = Path("C:/Users/juraj/Documents/odvis-corporate-website")
easyocr_root = root / ".EasyOCR"
easyocr_root.mkdir(exist_ok=True)
os.environ["EASYOCR_MODULE_PATH"] = str(easyocr_root).replace("\\", "/") + "/"

import easyocr
reader_ocr = easyocr.Reader(["hr", "en"], download_enabled=True)

ids = [
    "16523", "16530", "15456", "16132", "13401", "15705", "6217",
    "14587", "15912", "15228", "15559", "15201", "14790", "16633",
    "16700", "16002", "16442", "16478"
]

subjects = {
    "16523": "Zaključivanje ugovora bez provedenog postupka javne nabave",
    "16530": "Pojašnjavanje i dopunjavanje dokumentacije",
    "15456": "Dokumentacija za nadmetanje – zahtijevanje više razine tehničke i stručne sposobnosti",
    "16132": "Utvrđivanje istih ili sličnih ugovora – dokazivanje",
    "13401": "Potpisivanje ponude od prokurista",
    "15705": "Uvjet poslovne sposobnosti - Licenciranje u šumarstvu",
    "6217": "Neuobičajeno niska cijena",
    "14587": "Ekonomski najpovoljnija ponuda",
    "15912": "Dokumentacija za nadmetanje – dokaz o izvršenju istog ili sličnog ugovora",
    "15228": "Prijevod dokumentacije po sudskom tumaču",
    "15559": "Dokaz tehničke i stručne sposobnosti – osposobljavanje za rukovanje strojevima ili uređajima",
    "15201": "Protek vremena kao razlog za poništenje postupka",
    "14790": "Dokazivanje izvršavanja ugovora vezano uz predmet nabave",
    "16633": "Dokaz o raspolaganju stručnjacima drugih subjekata",
    "16700": "Poništavanje postupka zbog nepripremljenosti dokumentacije",
    "16002": "Dokaz o zapošljavanju stručnjaka",
    "16442": "Izvorni predložak troškovnika",
    "16478": "Nejednak tretman ponuditelja",
}

for cid in ids:
    pdf_path = root / f"{cid}.pdf"
    try:
        reader = PdfReader(str(pdf_path))
        pages_text = []
        for i, page in enumerate(reader.pages):
            text = page.extract_text() or ""
            if not text.strip() and page.images:
                # Try OCR on first image of page
                img_obj = page.images[0]
                img_path = root / f"{cid}_page{i}.png"
                with open(img_path, "wb") as f:
                    f.write(img_obj.data)
                try:
                    img = Image.open(img_path)
                    if img.mode != "RGB":
                        img = img.convert("RGB")
                    img.save(img_path)
                    result = reader_ocr.readtext(str(img_path), detail=0, paragraph=True)
                    text = "\n".join(result)
                except Exception as img_err:
                    text = f"[OCR error: {img_err}]"
            pages_text.append(text)
        full_text = "\n".join(pages_text)
        full_text = re.sub(r'\n+', '\n', full_text.strip())
        print(f"=== {cid} | {subjects.get(cid, '')} ===")
        print(full_text[:5000])
        print("\n")
    except Exception as e:
        print(f"=== {cid} ERROR ===")
        print(e)
        print("\n")
