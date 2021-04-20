let count = 0;
let num = document.querySelector("#num");
let dec = document.querySelector("#decrease");
let inc = document.querySelector("#increase");
let res = document.querySelector("#reset");

function color() {
  if (count < 0) {
    num.style.color = "red";
  } else if (count == 0) {
    num.style.color = "#02143c";
  }
  if (count > 0) num.style.color = "#0df200";
}
dec.addEventListener("click", () => {
  count--;
  color();
  num.textContent = count;
});
res.addEventListener("click", () => {
  count = 0;
  color();
  num.textContent = count;
});
inc.addEventListener("click", () => {
  count++;
  color();
  num.textContent = count;
});
