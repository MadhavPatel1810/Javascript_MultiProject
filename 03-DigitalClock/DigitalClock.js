const clock = document.getElementById("clock");
clock.innerHTML = "Loading...";
setInterval(() => {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
