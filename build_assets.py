from pathlib import Path
from PIL import Image

Path("blog_images_downscaled").mkdir(exist_ok=True)

for x in Path("blog_images").iterdir():
    outpath = Path("blog_images_downscaled") / x.with_suffix(".jpg").name

    if outpath.exists():
        continue

    im = Image.open(str(x.resolve()))

    scalefactor = 350 / im.width

    im = im.resize(
        tuple(
            map(
                int,
                (scalefactor * im.width, scalefactor * im.height),
            )
        ),
        Image.Resampling.LANCZOS,
    )
    im.save(str(outpath))
