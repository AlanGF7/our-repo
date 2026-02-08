const envelope = document.getElementById("envelope");
const acceptBtn = document.getElementById("acceptBtn");

envelope.addEventListener("click", () => {
  envelope.classList.toggle("open");
});

acceptBtn.addEventListener("click", (e) => {
  e.stopPropagation();

  for (let i = 0; i < 20; i++) {
    setTimeout(createHeart, i * 100);
  }

  setTimeout(() => {
    window.location.href = "./sanvalentin.html"; // tu página final
  }, 2500);
});

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (2 + Math.random() * 2) + "s";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 4000);
}