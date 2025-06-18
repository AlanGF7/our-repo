document.addEventListener("DOMContentLoaded", () => {
    fetch("/navbar/navbar.html")
      .then(res => res.text())
      .then(data => {
        document.getElementById("navbar").innerHTML = data;

        const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/js/bootstrap.bundle.min.js";
      script.crossOrigin = "anonymous";
      document.body.appendChild(script);
      });
  });