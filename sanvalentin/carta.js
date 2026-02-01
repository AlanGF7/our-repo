const envelope = document.getElementById("envelope");
const acceptBtn = document.getElementById("acceptBtn");

envelope.addEventListener("click", () => {
  envelope.classList.add("open");
});

acceptBtn.addEventListener("click", (e) => {
  e.stopPropagation(); // evita reabrir el sobre
  window.location.href = "../index.html"; // 👈 tu página final
});