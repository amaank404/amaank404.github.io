import jinja2
import markdown2
from pathlib import Path

template = jinja2.Template(Path("templates/blog.html").read_text())
indexitem = jinja2.Template(Path("templates/index_item.html").read_text())

blogs = []

blogdir = Path("blog")
if blogdir.exists():
    blogdir.rmtree()
Path("blog").mkdir(exist_ok=True)

for x in Path("blog_src").iterdir():
    if x.suffix == ".md":
        data = x.read_text("utf-8") + "\n" * 3

        title, image, subtext, content = data.split("\n", 3)
        blogs.append([x.with_suffix(".html").name, title, image, subtext])

        image = image.strip()

        html = template.render(
            content=markdown2.markdown(content),
            title=title,
            image=image,
            subtext=subtext,
        )
        outpath = Path("blog") / x.with_suffix(".html").name

        outpath.write_text(html)

indexhtml = '<div class="__index">'

for url, title, image, subtext in blogs:
    item = indexitem.render(
        title=title, image=image, subtext=subtext, url=f"/blog/{url}"
    )
    indexhtml += item

indexhtml += "</div>"

html = template.render(content=indexhtml, title="Index ", image="", subtext="")
(Path("blog") / "index.html").write_text(html)
