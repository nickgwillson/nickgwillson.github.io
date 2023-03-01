
/*---- Event Listener for navbar scrolling --
document.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    const navbarHeight = 10;
    var scrollTop     = (window).scrollTop(),
    elementOffset = ('#navbar').offset().top,
    distance      = (elementOffset - scrollTop);
    alert(distance);
    const distanceFromTop = Math.abs(document.body.getBoundingClientRect().top);
    if (distance <= navbarHeight) navbar.classList.add("fixed-top");
    else navbar.classList.remove("fixed-top");
});-*/