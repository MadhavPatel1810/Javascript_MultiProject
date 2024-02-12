const url = "https://api.chucknorris.io/jokes/random";
// handle this end point with XMLHttpRequest
// handle this end point with promises
// handle the case of race condition
/******* Start ********/
// 1). handle this end point with XMLHttpRequest
// document.getElementById("getJoke").addEventListener("click", function () {
//   const xhr = new XMLHttpRequest();
//   xhr.onreadystatechange = function () {
//     if (xhr.readyState === XMLHttpRequest.DONE) {
//       if (xhr.status === 200) {
//         const jokeData = JSON.parse(xhr.responseText);
//         displayJoke(jokeData.value);
//       } else {
//         console.error("Error fetching Chuck Norris joke:", xhr.statusText);
//       }
//     }
//   };

//   xhr.open("GET", url);
//   xhr.send();
// });

function displayJoke(joke) {
  document.getElementById("display-joke").innerText = joke;
}

function getChuckNorrisJoke() {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          const jokeData = JSON.parse(xhr.responseText);
          resolve(jokeData.value);
        } else {
          reject(new Error("Error fetching Chuck Norris joke"));
        }
      }
    };

    xhr.open("GET", url);
    xhr.send();
  });
}

// 2). handle this end point with promises
document.getElementById("getJoke").addEventListener("click", function () {
  getChuckNorrisJoke()
    .then((joke) => displayJoke(joke))
    .catch((error) => console.error(error.message));
});

// 3). handle the case of race condition
// document.getElementById("getJoke").addEventListener("click", function () {
//   // Disable the button
//   this.disabled = true;
//   getChuckNorrisJoke()
//     .then((joke) => displayJoke(joke))
//     .catch((error) => console.error(error.message))
//     .finally(() => {
//       // Enable the button regardless of success or failure
//       document.getElementById("getJoke").disabled = false;
//     });
// });

/******* End ********/
