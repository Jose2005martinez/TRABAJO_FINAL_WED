// Función para mostrar y ocultar el menú móvil
const menuIcon = document.getElementById("menu-icon");
const navbar = document.querySelector(".Navbar");

menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("active");  // Añade o quita la clase "active" al menú
});

// Función para aplicar el desplazamiento suave al hacer clic en los enlaces del menú
const menuLinks = document.querySelectorAll(".Navbar a");

menuLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault(); // Evita que el enlace haga una navegación normal
        const targetSection = document.querySelector(link.getAttribute("href")); // Obtener el destino de la sección
        targetSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});

// Resaltar el enlace activo en el menú cuando el usuario hace scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".Navbar a");

window.addEventListener("scroll", () => {
    let currentSection = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active"); // Quita la clase "active" de todos los enlaces
        if (link.getAttribute("href").includes(currentSection)) {
            link.classList.add("active"); // Añade la clase "active" al enlace correspondiente
        }
    });
});

// Validación del formulario de contacto
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita que el formulario se envíe de forma predeterminada

    const fullName = form.querySelector("input[type='text']").value;
    const email = form.querySelector("input[type='email']").value;
    const phone = form.querySelector("input[type='number']").value;
    const subject = form.querySelector("input[type='text']:nth-child(4)").value;
    const message = form.querySelector("textarea").value;

    if (!fullName || !email || !phone || !subject || !message) {
        alert("Please fill in all fields.");
    } else {
        alert("Message sent successfully!");
        form.reset(); // Limpia el formulario después de enviarlo
    }
});
