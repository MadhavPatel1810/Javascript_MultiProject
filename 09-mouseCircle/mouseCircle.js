const cursor = document.querySelector(".cursor");
// an array of 10 colors in hex value
const colors = [
  "#FF6633",
  "#FFB399",
  "#FF33FF",
  "#FFFF99",
  "#00B3E6",
  "#E6B333",
  "#3366E6",
  "#999966",
  "#99FF99",
  "#B34D4D",
];
// add circle to cursor and change it's color as cursor moves on the screen. Pick color from these array

document.addEventListener("mousemove", function (e) {
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  cursor.style.left = mouseX + "px";
  cursor.style.top = mouseY + "px";
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  cursor.style.backgroundColor = randomColor;
});
