var selected = false;

let navBar = $(".navbar");
let Jwindow = $(window);
let scrollViewButton = $('.scroll-view-button');
let scrollUpButton = $('.scroll-up-button');
let themeButton = $('.theme-button');

let theme = readCookie("theme");
if (theme === null) {
    createCookie("theme", "dark", 365);
    theme = "dark";
}
setTheme(theme);

function setTheme(theme) {
    let bodyTag = $('body');
    if (theme === "dark") {
        bodyTag.removeClass("light-theme");
        themeButton.text("dark_mode");
        createCookie("theme", "dark");
    } else {
        bodyTag.addClass("light-theme");
        themeButton.text("light_mode");
        createCookie("theme", "light");
    }
}

function setup_navbar(callback_outer_height, hide_buttons = true) {
    window.addEventListener('scroll', () => {
        document.body.style.setProperty('--scrolly', window.scrollY);

        // Height at which to show the navbar borders
        // let h1 = titleBg.outerHeight();
        let h1 = callback_outer_height();

        if (window.scrollY > h1 && !selected) {
            selected = true;
            navBar.addClass("navbar-borders");
        } else if (window.scrollY < h1) {
            selected = false;
            navBar.removeClass("navbar-borders");
        }

        if (hide_buttons) {
            if (window.scrollY > Jwindow.height()/2) {
                scrollViewButton.removeClass("hidden");
            } else {
                scrollViewButton.addClass("hidden");
            }
        }

    }, false);
}

scrollUpButton.on("click", () => {
    $('html, body').animate({
        scrollTop: 0
    }, 800, ()=>{});
})

themeButton.on("click", () => {
    let bodyTag = $('body');
    if (bodyTag.hasClass("light-theme")) {
        setTheme("dark");
    } else {
        setTheme("light");
    }
})

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add("sho");
        } else {
            entry.target.classList.remove("sho");
        }
    });
});

const hiddenElements = document.querySelectorAll('.hid');
hiddenElements.forEach((el) => observer.observe(el));