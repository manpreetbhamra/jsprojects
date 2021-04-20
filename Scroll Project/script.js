const navslide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".navlinks");
  const navlinks = document.querySelectorAll(".navlinks li");

  burger.addEventListener("click", () => {
    //toggle Nav
    nav.classList.toggle("nav-active");

    //Animate links
    navlinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = ``;
      } else {
        link.style.animation = `navlinkfade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });

    //burger animation
    burger.classList.toggle("toggle");
  });
};

navslide();
