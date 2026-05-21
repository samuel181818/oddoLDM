function mostrarMenu() {
    let menu = document.querySelector(".menu");
    menu.classList.toggle("show");
}

window.addEventListener("scroll", function () {
    let boton = document.getElementById("subirArriba");
    if (boton) {
        if (window.scrollY > 250) {
            boton.style.display = "block";
        } else {
            boton.style.display = "none";
        }
    }
});

function subirArriba() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

document.addEventListener("DOMContentLoaded", function () {
    let paginaActual = window.location.pathname.split("/").pop();
    if (paginaActual === "" || paginaActual === "/") {
        paginaActual = "index.html";
    }

    let enlaces = document.querySelectorAll("nav a");
    enlaces.forEach(function (enlace) {
        if (enlace.getAttribute("href") === paginaActual) {
            enlace.classList.add("activo");
        }
    });
});
