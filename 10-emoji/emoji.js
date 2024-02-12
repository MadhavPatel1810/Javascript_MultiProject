const btn = document.querySelector("#emoji");
const emojis = [
  "😆",
  "😅",
  "🤣",
  "😂",
  "😀",
  "🤑",
  "🤨",
  "🙂",
  "😊",
  "😗",
  "😛",
  "😏",
  "🤥",
  "😴",
  "🥺",
  "😧",
  "😇",
  "😳",
  "🙃",
  "🥴",
  "🧐",
  "🤨",
  "😒",
  "🤔",
  "🤭",
  "🥰",
  "🤐",
  "👀",
  "🤔",
  "🤪",
  "🥲",
  "😃",
  "😁",
  "😬",
];
let position = 0;
btn.addEventListener("mouseover", function (e) {
  if (position < emojis.length) {
    btn.innerHTML = emojis[position];
    position++;
  } else {
    position = 0;
    btn.innerHTML = emojis[position];
  }
});
