
/* ===================================
   PURA VIDA TRAVEL
   MENÚ DE NAVEGACIÓN MÓVIL
=================================== */

const botonMenu = document.querySelector(".boton-menu");
const menuPrincipal = document.querySelector("#menu-principal");

if (botonMenu && menuPrincipal) {

  botonMenu.addEventListener("click", () => {
    const estaAbierto = menuPrincipal.classList.toggle("abierta");

    botonMenu.setAttribute("aria-expanded", String(estaAbierto));

    botonMenu.setAttribute(
      "aria-label",
      estaAbierto ? "Close navigation menu" : "Open navigation menu"
    );

    botonMenu.textContent = estaAbierto ? "✕" : "☰";
  });

  const enlacesMenu = menuPrincipal.querySelectorAll("a");

  enlacesMenu.forEach((enlace) => {
    enlace.addEventListener("click", () => {
      menuPrincipal.classList.remove("abierta");
      botonMenu.setAttribute("aria-expanded", "false");
      botonMenu.setAttribute("aria-label", "Open navigation menu");
      botonMenu.textContent = "☰";
    });
  });

}
