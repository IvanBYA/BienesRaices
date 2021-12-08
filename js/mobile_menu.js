// mobileMenu - En esta variable se guardará el evento click  
const mobileMenu = document.querySelector(".mobile__menu");

// navList - En esta variable se ejecutara la clase toggle y se instanciará la clase en la etiqueta <nav>
const navList = document.querySelector(".nav");

mobileMenu.addEventListener("click", () => {
    // mobile__menu--visible - Esta clase mostrará la navegación al hacer click en el icono-hamburguer
    navList.classList.toggle("mobile__menu--visible")
})
