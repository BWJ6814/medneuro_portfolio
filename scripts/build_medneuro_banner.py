"""One-off: composite MedNeuro intro banner 3:1 from two screenshots."""
from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

# 업로드 순서: 첫 번째 스크린샷 → 왼쪽 + [2D MODEL], 두 번째 → 오른쪽 + [3D MODEL]
# (화면 내용과 라벨이 어긋나 보이면 스크립트에서 IMG_2D / IMG_3D 경로만 서로 바꾸면 됩니다.)
IMG_2D = Path(
    r"C:\Users\human-26\.cursor\projects\d-medneuro-pf\assets"
    r"\c__Users_human-26_AppData_Roaming_Cursor_User_workspaceStorage_fb64b61be1ae55201fa22306ffbbe087_images_image-73a31a54-3017-4478-a933-66749b863722.png"
)
IMG_3D = Path(
    r"C:\Users\human-26\.cursor\projects\d-medneuro-pf\assets"
    r"\c__Users_human-26_AppData_Roaming_Cursor_User_workspaceStorage_fb64b61be1ae55201fa22306ffbbe087_images_image-18e1cce7-6b2a-4565-872a-34ae8dfc0782.png"
)

OUT = Path(__file__).resolve().parents[1] / "public" / "images" / "hero" / "medneuro-banner-3x1.png"

# 3:1 wide banner
W, H = 2400, 800
BG = (13, 13, 15)
HEADER_H = 132
PAD_X = 40
GAP = 28
LABEL_H = 44


def load_font(size: int, bold: bool = False) -> ImageFont.FreeTypeFont:
    candidates = [
        Path("C:/Windows/Fonts/malgunbd.ttf") if bold else Path("C:/Windows/Fonts/malgun.ttf"),
        Path("C:/Windows/Fonts/malgun.ttf"),
    ]
    for p in candidates:
        if p.exists():
            return ImageFont.truetype(str(p), size=size)
    return ImageFont.load_default()


def fit_image(im: Image.Image, max_w: int, max_h: int) -> Image.Image:
    w, h = im.size
    scale = min(max_w / w, max_h / h, 1.0)
    nw, nh = int(w * scale), int(h * scale)
    return im.resize((nw, nh), Image.Resampling.LANCZOS)


def main() -> None:
    im2d = Image.open(IMG_2D).convert("RGBA")
    im3d = Image.open(IMG_3D).convert("RGBA")

    canvas = Image.new("RGB", (W, H), BG)
    draw = ImageDraw.Draw(canvas)

    font_title = load_font(38, bold=True)
    font_sub = load_font(22, bold=False)
    font_label = load_font(20, bold=True)

    # Header
    title = "MedNeuro"
    sub = "뇌종양 NII 파일 2D/3D 모델링 플랫폼"
    draw.text((PAD_X, 36), title, fill=(250, 250, 252), font=font_title)
    draw.text((PAD_X + 2, 88), sub, fill=(180, 184, 195), font=font_sub)

    body_top = HEADER_H + 8
    body_h = H - body_top - LABEL_H - 16
    col_w = (W - 2 * PAD_X - GAP) // 2

    slots = [
        (im2d, "[2D MODEL]", PAD_X),
        (im3d, "[3D MODEL]", PAD_X + col_w + GAP),
    ]

    for im, label, x0 in slots:
        fitted = fit_image(im, col_w, body_h)
        fw, fh = fitted.size
        px = x0 + (col_w - fw) // 2
        py = body_top + (body_h - fh) // 2
        # subtle frame
        border = 1
        bx0, by0 = px - border, py - border
        draw.rectangle(
            [bx0, by0, bx0 + fw + 2 * border - 1, by0 + fh + 2 * border - 1],
            outline=(45, 48, 58),
        )
        canvas.paste(fitted, (px, py), fitted)

        tw = draw.textlength(label, font=font_label)
        lx = x0 + (col_w - tw) / 2
        ly = H - LABEL_H - 6
        draw.text((lx, ly), label, fill=(220, 224, 235), font=font_label)

    OUT.parent.mkdir(parents=True, exist_ok=True)
    canvas.save(OUT, "PNG", optimize=True)
    print("Wrote", OUT, canvas.size)


if __name__ == "__main__":
    main()
