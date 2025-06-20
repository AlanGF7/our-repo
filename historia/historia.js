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
      mes: "Marzo 2022",
      descripcion: "Antes de que nos dieran las 12 🕛",
      imagen: "https://raw.githubusercontent.com/AlanGF7/our-repo/main/assets/primeras_fotos/20220305_232850.jpg"
    },
    {
      mes: "Mayo 2022",
      descripcion: "Apego evitativo 💔",
      imagen: "https://raw.githubusercontent.com/AlanGF7/our-repo/main/assets/primeras_fotos/ApegoEvitativo.jpg"
    },
    {
      mes: "Mayo 2022",
      descripcion: "Nuestro inicio en esta aventura 💍",
      imagen: "https://raw.githubusercontent.com/AlanGF7/our-repo/main/assets/primeras_fotos/Pepito.jpg"
    },
    {
      mes: "Junio 2022",
      descripcion: "Primera patinada (En tu pumpe) 🛼",
      imagen: "https://raw.githubusercontent.com/AlanGF7/our-repo/main/assets/primeras_fotos/patinajehielo.jpg"
    },
    {
      mes: "Agosto 2022",
      descripcion: "Nuestro reencuentro 💝",
      imagen: "https://raw.githubusercontent.com/AlanGF7/our-repo/main/assets/galería/LasBrazas.jpg"
    },
    {
      mes: "Agosto 2022",
      descripcion: "Nuestra primera fiesta familiar 🥳",
      imagen: "https://raw.githubusercontent.com/AlanGF7/our-repo/main/assets/primeras_fotos/FiestaRichi.jpg"
    },
    {
      mes: "Agosto 2022",
      descripcion: "Primeros partidos ⚾",
      imagen: "https://raw.githubusercontent.com/AlanGF7/our-repo/main/assets/primeras_fotos/primerospartidos.jpg"
    },
    {
      mes: "Septiembre 2022",
      descripcion: "Primer cumpleaños Alan 🎂",
      imagen: "https://raw.githubusercontent.com/AlanGF7/our-repo/main/assets/primeras_fotos/CumpleAlan.jpg"
    },
    {
      mes: "Octubre 2022",
      descripcion: "Nuestro mesiversario en Olive Garden 🍝",
      imagen: "https://raw.githubusercontent.com/AlanGF7/our-repo/main/assets/primeras_fotos/MesiversarioOliveGarden.jpg"
    },
    {
      mes: "Noviembre 2022",
      descripcion: "Nuestros primeros disfraces 👻",
      imagen: "https://raw.githubusercontent.com/AlanGF7/our-repo/main/assets/galería/TimmyTrixie2.jpg"
    },
    {
      mes: "Noviembre 2022",
      descripcion: "Nuestros primer viaje juntos (A Morat) 🚌",
      imagen: "https://raw.githubusercontent.com/AlanGF7/our-repo/main/assets/primeras_fotos/Morat.jpg"
    },
    {
      mes: "Noviembre 2022",
      descripcion: "Nuestro primer baile juntos 💃🕺 ",
      imagen: "https://raw.githubusercontent.com/AlanGF7/our-repo/main/assets/primeras_fotos/PrimerBaileJuntos.jpg"
    },
    {
      mes: "Noviembre 2022",
      descripcion: "Nuestro primer picnic 🏕️",
      imagen: "https://raw.githubusercontent.com/AlanGF7/our-repo/main/assets/primeras_fotos/PrimerPicnic.jpg"
    },
    {
      mes: "Diciembre 2022",
      descripcion: "Anillo de promesa 💍",
      imagen: "https://raw.githubusercontent.com/AlanGF7/our-repo/main/assets/primeras_fotos/PrimerAnilloPromesa.jpg"
    },
    {
      mes: "Febrero 2023",
      descripcion: "Anillo de promesa 🎙️",
      imagen: "https://raw.githubusercontent.com/AlanGF7/our-repo/main/assets/galería/Bocelli2.jpg"
    },
    {
      mes: "Marzo 2023",
      descripcion: "Nuestro poderoso Maruchan-Ramen 🍝",
      imagen: "https://raw.githubusercontent.com/AlanGF7/our-repo/main/assets/galería/MaruchanRamen.jpg"
    },
    {
      mes: "Marzo 2023",
      descripcion: "La vez que fuimos a ver 7 veces adiós 💑",
      imagen: "https://raw.githubusercontent.com/AlanGF7/our-repo/main/assets/galería/7VecesAdios.jpg"
    },
    {
      mes: "Mayo 2023",
      descripcion: "Volvimos a bailar brujería 💃",
      imagen: "https://raw.githubusercontent.com/AlanGF7/our-repo/main/assets/galería/Brujeria.jpg"
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