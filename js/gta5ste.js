console.log("GTA Page Loaded");

function toggleMode() {
  document.body.classList.toggle("dark-mode");
}

window.addEventListener("scroll", () => {
  const section = document.querySelector(".Michael");
  const position = section.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;

  if (position < screenHeight) {
    section.style.opacity = "1";
    section.style.transform = "translateY(0)";
  }
});
