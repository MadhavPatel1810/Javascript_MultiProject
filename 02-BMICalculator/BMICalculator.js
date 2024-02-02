const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");
  const p = document.createElement("p");
  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
    if (bmi < 18.6) {
      p.innerHTML = "BMI is Under Weight";
    } else if (bmi > 24.9) {
      p.innerHTML = "BMI is Overweight";
    } else {
      p.innerHTML = "BMI is Normal Range";
    }
    results.appendChild(p);
  }
});
