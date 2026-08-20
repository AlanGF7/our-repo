// navbar.js
// Navbar compartido para todo el sitio. Se genera una sola vez aquí
// y se inyecta en cada página, así evitamos copiar/pegar el mismo
// HTML del navbar en cada archivo.
//
// CÓMO USARLO en cada página:
//
//   1. En el <body>, donde antes estaba el <nav>...</nav>, deja solo:
//        <div id="navbar-placeholder"></div>
//
//   2. Antes de cerrar </body>, agrega estas dos líneas (en este orden):
//        <script>const BASE_PATH = "";</script>      <!-- "" en index.html (raíz) -->
//        <script>const BASE_PATH = "../";</script>   <!-- "../" en páginas dentro de una carpeta -->
//        <script src="navbar.js"></script>            <!-- ajusta la ruta según la carpeta -->
//
// Para agregar/quitar/renombrar una sección del sitio, SOLO se edita
// el arreglo `links` de aquí abajo. No hay que tocar ninguna otra página.

(function () {
  const links = [
    { href: "historia/historia.html", label: "Historia" },
    { href: "recuerdos/recuerdos.html", label: "Recuerdos" },
    { href: "galeria/galeria.html", label: "Galería" },
    { href: "cartas/cartas.html", label: "Cartas" },
    { href: "anecdotas/anecdotas.html", label: "Anécdotas" },
    { href: "playlist/playlist.html", label: "Playlist" },
    { href: "10cosas/10cosas.html", label: "Cualidades" },
    { href: "sanvalentin/carta.html", label: "San Valentín" },
  ];

  document.addEventListener("DOMContentLoaded", function () {
    const placeholder = document.getElementById("navbar-placeholder");
    if (!placeholder) {
      console.warn(
        "navbar.js: no encontré <div id=\"navbar-placeholder\"></div> en esta página."
      );
      return;
    }

    const base = typeof BASE_PATH !== "undefined" ? BASE_PATH : "";
    const currentPath = window.location.pathname;

    const linksHTML = links
      .map((link) => {
        const fullHref = base + link.href;
        const isActive = currentPath.endsWith("/" + link.href);
        return `
          <li class="nav-item">
            <a
              class="nav-link${isActive ? " active" : ""}"
              ${isActive ? 'aria-current="page"' : ""}
              href="${fullHref}"
              >${link.label}</a
            >
          </li>`;
      })
      .join("");

    placeholder.innerHTML = `
      <nav class="navbar-custom navbar navbar-expand-lg" id="navbar">
        <div class="container-fluid">
          <a class="navbar-brand" href="${base}index.html">Inicio</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              ${linksHTML}
            </ul>
          </div>
        </div>
      </nav>`;
  });
})();
