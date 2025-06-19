const recuerdos = [
    {
      mes: "Mayo 2021",
      descripcion: "Como todo empezó 💕",
      imagen: "https://raw.githubusercontent.com/AlanGF7/our-repo/main/assets/primeras_fotos/ComoTodoEmpezó.jpg"
    },
    {
      mes: "Febrero 2022",
      descripcion: "Primera salida 📸",
      imagen: "https://raw.githubusercontent.com/AlanGF7/our-repo/main/assets/primeras_fotos/primerasalida.jpg"
    },
    {
      mes: "Junio 2022",
      descripcion: "Primera patinada",
      imagen: "https://raw.githubusercontent.com/AlanGF7/our-repo/main/assets/primeras_fotos/patinajehielo.jpg"
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
        <h5>${recuerdo.mes}</h5>
        <p>${recuerdo.descripcion}</p>
        <img src="${recuerdo.imagen}" alt="Recuerdo ${index + 1}">
      </div>
    `;
    timeline.appendChild(item);
  });