const nav = document.querySelector("nav");
const nava = document.querySelectorAll("nav a");
const button = document.getElementById("btn");
const logo = document.getElementById("logo");

logo.addEventListener("click", () => {
  nav.classList.toggle("active");
  button.classList.toggle("active");
  for (let i = 0; i < nava.length; i++) {
    nava[i].classList.toggle("active");
  }

  if (nav.classList.contains("active")) {
    logo.src = "sun.png";
    logo.style.transition = "0.4s linear";
  } else {
    logo.src = "moon.png";
    logo.style.transition = "0.4s linear";
  }
});
