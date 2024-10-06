var selected = false;

let navBar = $(".navbar");
let titleBg = $(".title-background");
let Jwindow = $(window);
let scrollUpButton = $('.scroll-up-button')

window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scrolly', window.scrollY);

    // Height at which to show the navbar borders
    let h1 = titleBg.outerHeight();

    if (window.scrollY > h1 && !selected) {
        selected = true;
        navBar.addClass("navbar-borders");
    } else if (window.scrollY < h1) {
        selected = false;
        navBar.removeClass("navbar-borders");
    }

    if (window.scrollY > Jwindow.height()) {
        scrollUpButton.removeClass("hidden");
    } else {
        scrollUpButton.addClass("hidden");
    }

}, false);


scrollUpButton.on("click", () => {
    $('html, body').animate({
        scrollTop: 0
    }, 800, ()=>{});
})