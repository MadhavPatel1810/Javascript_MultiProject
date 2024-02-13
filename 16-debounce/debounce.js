// with each character typed in search box, make an API call to randomuserme api and display a card below it. Use debounce concept to reduce api calls.

// You will automatically learn about this and apply in this. ☕️

const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func.apply(null, args);
    }, delay);
  };
};

document.addEventListener("DOMContentLoaded", () => {
  const userInput = document.getElementById("user-input");
  const userCard = document.getElementById("user-card");
  const fetchData = async (searchTerm) => {
    try {
      const response = await fetch(
        `https://randomuser.me/api/?results=1&name=${searchTerm}`
      );
      const data = await response.json();
      const user = data.results[0];
      const userName = `${user.name.first} ${user.name.last}`;
      const userEmail = user.email;
      const userImage = user.picture.medium;
      userCard.style.display = "flex";
      userCard.style.justifyContent = "center";
      userCard.innerHTML = `
          <div class="card">
            <img src="${userImage}" class="card-img-top" alt="${userName}">
            <div class="card-body">
              <h5 class="card-title">${userName}</h5>
              <p class="card-text">${userEmail}</p>
            </div>
          </div>
        `;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const debouncedFetchData = debounce(fetchData, 500);
  userInput.addEventListener("input", (event) => {
    const searchTerm = event.target.value.trim();
    debouncedFetchData(searchTerm);
  });
});
