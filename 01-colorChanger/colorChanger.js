const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");
//All buttons loop
buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    if (e.target.id) {
      body.style.backgroundColor = e.target.id;
    }
  });
});
