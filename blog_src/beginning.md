The Beginning
/blog_images/nature.jpg
2024-10-27

Just about yesterday, I finished writing an automatic
blog generator for this website of mine. Started as a
simple 'About Me', slowly building upon its structure
to now integrate a full fledged blog post. Initially,
I used _jinja2 templates_ to generate blog post html
based on HTML generated from the MarkDown sources.
Then I slowly separated the main page's CSS files
into small modular components that I could include
into different sections of my website, this saved
me the effort of rewriting the `theme switcher` and
`scroll to top` buttons. All this blog post is powered
by a very simple build script accompanied by github
workflows for automatic generation of the website on push

```python
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
    "smart-pants",
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

```

Now, isn't that simple >:p

# Future Plans

I have nothing in mind for the future of this post,
I might as well say that this is just for convenience
and that **I might almost never write anything of substance
here often.** But for now, I feel contempt with the
progress I've made in my Web Dev journey. What started
as a simple HTML page that I created to serve video files
on my home network, slowly evolved into a CSS-heavy
media server. Though, I no longer possess the code
for my first ever website since its permanent loss
in my home server's loss of data.

This website has been a great learning experience as a
Web Developer. Being a Backend dev, I never really completely
understood what went into making websites so beautiful
and user friendly, Only through building and working
on this have I finally realized the countless hours
one spends on fixing their CSS, centering a `div`
and more...

This website is also my first time making responsive websites,
making it function on all sorts of screen sizes while also
looking fabulous.
