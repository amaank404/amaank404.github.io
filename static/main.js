let titleBg = $(".title-background");

setup_navbar(() => titleBg.outerHeight());

async function changeFieldSpecifierText() {
    const greetings = ["Backend Dev", "Japanese Learner", "Indian Student"];
    let elem = document.getElementById("field-specifier-changing");
    var i = 1;
    var curtext = '';
    while (true) {
        await sleep(2000);
        while (elem.innerText.length > 0) {
            elem.innerText = elem.innerText.slice(0, elem.innerText.length-1);
            await sleep(100);
        }

        curtext = '';

        for (const c of greetings[i]) {
            curtext += c;
            elem.innerText = curtext;
            if (c !== ' ') {
                await sleep(100);
            }
        }
        

        i++;
        if (i >= greetings.length) {
            i = 0;
        }
    }
}

changeFieldSpecifierText();
setupScrollShow();
setupBorderView();