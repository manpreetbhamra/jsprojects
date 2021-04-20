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

// const navbar = document.getElementById("nav");
// fixed navbar
// window.addEventListener("scroll", function () {
//   const scrollheight = window.pageYOffset;
//   console.log(scrollheight);
//   const navHeight = navbar.getBoundingClientRect().height;
//   if (scrollheight > navHeight) {
//     navbar.classList.add("fixed-nav");
//   } else {
//     navbar.classList.remove("fixed-nav");
//   }
// });

//select links
const scroll = document.querySelectorAll(".scroll-link");

scroll.forEach(function (link) {
  link.addEventListener("click", function (e) {
    //prevent default scroll
    e.preventDefault();
    //navigate to the click section
    const id = e.currentTarget.getAttribute("href").slice(1);
    console.log(id);
    const element = document.getElementById(id);
    //get value of the top of the element in pixels.
    let position = element.offsetTop;
    console.log(position);
    // to scroll to the position
    window.scrollTo({
      left: 0,
      top: position,
    });
  });
});
