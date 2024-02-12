const inputField = document.getElementById("input-field");
const outputField = document.getElementById("output-field");
const resultContainer = document.querySelector(".result-container");
const Result = document.createElement("h1");

outputField.addEventListener("click", function () {
  const activeButton = document.querySelector(".btn.active");
  if (activeButton && inputField.value) {
    const action = activeButton.dataset.action;
    resultContainer.innerHTML = "";
    resultContainer.appendChild(createResultElement(action));
  }
});

document.querySelectorAll(".btn").forEach(function (button) {
  button.addEventListener("click", function () {
    document.querySelectorAll(".btn").forEach(function (btn) {
      btn.classList.remove("active");
    });
    button.classList.add("active");
  });
});

function capitalizeWords(str) {
  return str.replace(/\b\w/g, function (char) {
    return char.toUpperCase();
  });
}

function createResultElement(action) {
  const inputValue = inputField.value;
  switch (action) {
    case "uppercase":
      Result.innerHTML = inputValue.toUpperCase();
      break;
    case "lowercase":
      Result.innerHTML = inputValue.toLowerCase();
      break;
    case "capitalize":
      Result.innerHTML = capitalizeWords(inputValue);
      break;
    case "bold":
      Result.innerHTML = `<strong>${inputValue}</strong>`;
      break;
    case "italic":
      Result.innerHTML = `<em>${inputValue}</em>`;
      break;
    case "underline":
      Result.innerHTML = `<u>${inputValue}</u>`;
      break;
    default:
      Result.innerHTML = inputValue;
  }
  return Result;
}
