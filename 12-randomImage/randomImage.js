const baseURL = "https://source.unsplash.com/all/300x300";

// this url gives an image. Use this and NO API calls

const contentDiv = document.querySelector(".content");
const likedButton = document.querySelector("button");

function loadRandomImage() {
  const imageUrl = `${baseURL}`;
  const imageElement = document.createElement("img");
  imageElement.src = imageUrl;
  imageElement.alt = "Random Image";
  contentDiv.innerHTML = "";
  contentDiv.appendChild(imageElement);
}
likedButton.addEventListener("click", function () {
  location.reload();
});
loadRandomImage();
