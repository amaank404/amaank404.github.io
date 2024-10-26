import jinja2
import markdown2
from pathlib import Path
import shutil

# markdown extras
markdown_extras = [
    "fenced-code-blocks",
    "footnotes",
    "header-ids",
    "nofollow",
    "spoiler",
    "strike",
    "tables",
    "target-blank-links",
    "task_list",
]

# load templates
template = jinja2.Template(Path("templates/blog.html").read_text())
indexitem = jinja2.Template(Path("templates/index_item.html").read_text())

blogs = []

# Remove blog directory if it exists
blogdir = Path("blog")
if blogdir.exists():
    shutil.rmtree(blogdir)
Path("blog").mkdir(exist_ok=True)

# For blog sources as md formatted
for x in Path("blog_src").iterdir():
    if x.suffix == ".md":
        data = x.read_text() + "\n" * 3

        title, image, subtext, content = data.split("\n", 3)
        blogs.append([x.with_suffix(".html").name, title, image, subtext])

        image = image.strip()

        html = template.render(
            content=markdown2.markdown(content, extras=markdown_extras),
            title=title,
            image=image,
            subtext=subtext,
        )
        outpath = Path("blog") / x.with_suffix(".html").name

        outpath.write_text(html)


# Create a blog index
indexhtml = '<div class="__index">'

for url, title, image, subtext in sorted(blogs, key=lambda x: x[3], reverse=True):
    item = indexitem.render(
        title=title, image=image, subtext=subtext, url=f"/blog/{url}"
    )
    indexhtml += item

indexhtml += "</div>"

html = template.render(content=indexhtml, title="Index ", image="", subtext="")
(Path("blog") / "index.html").write_text(html)
