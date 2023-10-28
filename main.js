var typed = new Typed(".text", {
    strings: ["Programmer", "Software Developer", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

function openPopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "block";
}

function closePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
}

