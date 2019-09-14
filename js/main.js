function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("main-nav").style.backgroundColor = "rgb(255, 255, 255)";
        document.getElementsByClassName("nav-logo")[0].style.height = "65px";
        document.getElementsByClassName("nav-text")[0].style.fontSize = "1.50rem";
        document.getElementById("scroll-up-button").classList.add("scale-in");
    } else {
        document.getElementById("main-nav").style.backgroundColor = "rgba(0, 0, 0, 0)";
        document.getElementsByClassName("nav-logo")[0].style.height = "85px";
        document.getElementsByClassName("nav-text")[0].style.fontSize = "2.00rem";
        document.getElementById("scroll-up-button").classList.remove("scale-in");
    }
}

$(window).on('load', function () {
    $(window).scrollTop(0);
    setTimeout(() => {
        $('#preloader').fadeOut('slow');
    }, 1000)
});

document.addEventListener('DOMContentLoaded', function () {
    const elems = document.querySelectorAll('.sidenav');
    const instances = M.Sidenav.init(elems, options);
});

// Or with jQuery

$(document).ready(function () {
    $('.sidenav').sidenav();
    $("#scroll-up-button").on('click', function(event) {
        $(window).scrollTop(0);
    });
});

window.onscroll = function () {
    scrollFunction()
};
