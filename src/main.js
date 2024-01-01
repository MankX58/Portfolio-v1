const buttonRight = document.getElementById("slideRight");
const buttonLeft = document.getElementById("slideLeft");

buttonRight.onclick = function () {
  document.getElementById("container").scrollLeft += 125;
  behavior: "smooth";
};

buttonLeft.onclick = function () {
  document.getElementById("container").scrollLeft -= 125;
  this.scroll({ top: 0, right: 125, behavior: "smooth" });
};
