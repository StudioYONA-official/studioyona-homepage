"""Regenerate lightweight web assets from the retained original fonts and PNGs.

Run with a local Python environment containing fontTools, brotli, and Pillow.
The site has no runtime or package-install dependency on these tools.
"""

from html.parser import HTMLParser
from pathlib import Path
import re

from fontTools import subset
from fontTools.ttLib import TTFont
from PIL import Image


ROOT = Path(__file__).resolve().parent.parent


class SiteText(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.characters = set(range(0x20, 0x100))
        self.skipped = 0

    def handle_starttag(self, tag, attrs):
        if tag in {"script", "style"}:
            self.skipped += 1
        for name, value in attrs:
            if value and (name in {"alt", "title", "aria-label", "placeholder", "content"}
                          or name.startswith(("data-title-", "data-description-"))):
                self.characters.update(map(ord, value))

    def handle_endtag(self, tag):
        if tag in {"script", "style"}:
            self.skipped -= 1

    def handle_data(self, data):
        if not self.skipped:
            self.characters.update(map(ord, data))


def main():
    parser = SiteText()
    for html in sorted(ROOT.rglob("*.html")):
        if not any(part.startswith(".") for part in html.relative_to(ROOT).parts):
            parser.feed(html.read_text(encoding="utf-8"))

    # CSS also renders text, such as the external-link arrow in the links hub.
    css = (ROOT / "assets/site.css").read_text(encoding="utf-8")
    parser.characters.update(map(ord, css))
    parser.characters.update(int(code, 16) for code in re.findall(r"\\([0-9a-fA-F]{1,6})", css))

    for source, target in [
        ("PretendardVariable.woff2", "PretendardSite.woff2"),
        ("SongMyung-korean-400.woff2", "SongMyungSite.woff2"),
    ]:
        original = ROOT / "assets/fonts" / source
        output = original.with_name(target)
        with TTFont(original) as font:
            options = subset.Options()
            options.name_IDs = ["*"]
            options.name_languages = ["*"]
            subsetter = subset.Subsetter(options=options)
            subsetter.populate(unicodes=parser.characters)
            subsetter.subset(font)
            font.flavor = "woff2"
            font.save(output)
        print(f"{target}: {original.stat().st_size:,} -> {output.stat().st_size:,} bytes")

    for name in ["edsn-frame", "detective-recorder-512", "peekaboo-cam",
                 "veruma", "spark-catcher", "mandarana"]:
        original = ROOT / "assets/app-icons" / f"{name}.png"
        output = original.with_suffix(".webp")
        with Image.open(original) as image:
            image.save(output, "WEBP", lossless=True, method=6, exact=True)
        print(f"{output.name}: {original.stat().st_size:,} -> {output.stat().st_size:,} bytes")


if __name__ == "__main__":
    main()
