const profileImg = document.querySelector(".tokenImage");
const ProfileName = document.querySelector(".ProfileName");
const description = document.querySelector(".description");
const priceElement = document.querySelector(".price p");
const durationElement = document.querySelector(".duration p");
const ProfilePath = document.querySelector(".creator p ins a");
const requestUrl = "https://api.github.com/users/madhavpatel1810";
const xhr = new XMLHttpRequest();
xhr.open("GET", requestUrl);
xhr.onreadystatechange = function (e) {
  if (xhr.readyState === 4) {
    const res = JSON.parse(this.responseText);
    if (!res?.message) {
      // profileImg.src = res?.avatar_url;
      ProfileName.innerHTML = res?.name;
      description.innerHTML = res?.bio;
      priceElement.textContent = res?.location;
      durationElement.textContent = res?.blog;
      ProfilePath.innerHTML = res?.html_url;
    }
    console.log(res);
  }
};
xhr.send();
