var counter = 0;
var started = false;
var countsincelast = 0;

function wpmhandler() {
    var elem = document.getElementById("wpm");
    elem.innerHTML = countsincelast.toString() + " Clicks/Second";
    elem.style.opacity = 1;
    countsincelast = 0;
}

function inccount() {
    if (!started) {
        setInterval(wpmhandler, 1000);
        started = true;
    }
    counter++;
    countsincelast++;
    document.getElementById("clickertext").innerHTML = counter;
}