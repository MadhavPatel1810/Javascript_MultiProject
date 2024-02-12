const url = "https://api.thecatapi.com/v1/images/search";
const container = document.querySelector(".container");
const gen_image = document.createElement("img");

function displayCat(catData) {
  gen_image.src = catData[0].url;
  gen_image.style.width = "300px";
  gen_image.style.height = "300px";
  container.appendChild(gen_image);
}
function getCatData() {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          const catData = JSON.parse(xhr.responseText);
          resolve(catData);
        } else {
          reject(new Error("Error fetching Chuck Norris joke"));
        }
      }
    };
    xhr.open("GET", url);
    xhr.send();
  });
}
document.querySelector(".btn_check").addEventListener("click", function () {
  getCatData()
    .then((catData) => displayCat(catData))
    .catch((error) => console.error(error.message));
});
