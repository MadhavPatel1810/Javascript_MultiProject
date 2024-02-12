const scrollIndicator = document.querySelector(".progress");
window.addEventListener("scroll", function () {
  const scrollHeight =
    document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = (window.scrollY / scrollHeight) * 100;
  scrollIndicator.style.width = `${scrolled}%`;
});
