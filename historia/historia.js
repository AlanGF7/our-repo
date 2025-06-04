const recuerdos = [
    {
      mes: "Marzo 2022",
      descripcion: "La primera vez que salimos 💕",
      imagen: "https://raw.githubusercontent.com/AlanGF7/our-repo/main/assets/testito.jpg"
    },
    {
      mes: "Abril 2022",
      descripcion: "Fuimos al parque 🌳",
      imagen: "https://picsum.photos/id/1025/500/300"
    },
    {
      mes: "Mayo 2022",
      descripcion: "Nos tomamos esta foto ✨",
      imagen: "https://picsum.photos/id/1035/500/300"
    },
    {
      mes: "Junio 2022",
      descripcion: "Nuestro primer viaje juntos 🚗",
      imagen: "https://picsum.photos/id/1062/500/300"
    },
    {
        mes: "Junio 2022",
        descripcion: "Nuestro primer viaje juntos 🚗",
        imagen: "https://picsum.photos/id/1062/500/300"
      },
      {
        mes: "Junio 2022",
        descripcion: "Nuestro primer viaje juntos 🚗",
        imagen: "https://picsum.photos/id/1062/500/300"
      }
    // Agrega más objetos aquí conforme vayas sumando recuerdos
  ];

  const timeline = document.getElementById("timeline");

  recuerdos.forEach((recuerdo, index) => {
    const lado = index % 2 === 0 ? "timeline-item-left" : "timeline-item-right";
    const item = document.createElement("div");
    item.className = `timeline-item ${lado}`;
    item.innerHTML = `
      <div class="timeline-content shadow">
        <h5>Mes ${index + 1} - ${recuerdo.mes}</h5>
        <p>${recuerdo.descripcion}</p>
        <img src="${recuerdo.imagen}" alt="Recuerdo ${index + 1}">
      </div>
    `;
    timeline.appendChild(item);
  });