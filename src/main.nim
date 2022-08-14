import dom
import asyncjs
import jsstuff

template br(node: Node) = node.appendChild(document.createElement("br"))
template `t`(body: string): Node = document.createTextNode(body)

proc main() {.async.} =
  var loadingAnimation = document.getElementById("loadinganim")
  var maincontent = document.getElementById("maincontainer")
  var terminal = document.getElementById("terminal")
  var uncoverer = document.getElementById("uncoverer")
  # eraseCookie("displaywelcome") # Uncomment this line when developing welcome animation
  if getCookie("displaywelcome") == "" or getCookie("displaywelcome") == "yes":
    document.body.style.backgroundcolor = "#000"

    terminal.appendChild(t"WEBCONFIG.exe disable COM0,keyboard,97")
    terminal.br()
    terminal.appendChild(t"Reloading Daemon")
    terminal.br()
    await sleep(2000)
    terminal.appendChild(t"Saving Config...")
    terminal.br()

    terminal.appendChild(t"Config saved to 'WEBCONF.ini'.")
    terminal.br()
    terminal.appendChild(t"C:\> ")

    for x in "LOADMAINPAGE.exe":
      await sleep(50)
      terminal.appendChild(t($x))
    terminal.br()
    terminal.appendChild(t"Loading ")
    for x in 1..3:
      await sleep(500)
      terminal.appendChild(t".")
    terminal.br()
    terminal.appendChild(t"LOADED!")
    await sleep(1000)
    terminal.remove()
    await sleep(1000)
    setCookie("displaywelcome", "no", 1)
    document.body.style.backgroundcolor = "var(--c1)"
    await sleep(1000)
    uncoverer.style.display = "block"
    maincontent.style.display = "block"
    await sleep(500)
    uncoverer.style.zindex = "999"
    await sleep(500)
    let emheight = getEmValue()

    let h = uncoverer.offsetHeight
    let steps = h div emheight
    for x in countdown(steps, 0):
      await sleep(10)
      uncoverer.style.height = $x & "em"
    uncoverer.remove()
    document.getElementById("divforvalcheck").remove()
  else:
    terminal.remove()
    maincontent.style.display = "block"
    uncoverer.style.display = "block"
    uncoverer.style.zindex = "999"
    let emheight = getEmValue()
    let h = uncoverer.offsetHeight
    let steps = h div emheight
    for x in countdown(steps, 0):
      await sleep(10)
      uncoverer.style.height = $x & "em"
    uncoverer.remove()
    document.getElementById("divforvalcheck").remove()

discard main()