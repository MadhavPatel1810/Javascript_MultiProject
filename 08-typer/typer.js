const typedTextSpan = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");

const words = ["Cool", "Jhakaas", "mast", "dhinchak", "Weird"];
let wordIndex = 0;
let charIndex = 0;
let isTyping = true;

function type() {
  if (wordIndex < words.length) {
    if (charIndex < words[wordIndex].length) {
      typedTextSpan.textContent += words[wordIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, 100);
    } else {
      setTimeout(erase, 1000);
      isTyping = false;
    }
  }
}

function erase() {
  if (charIndex > 0) {
    typedTextSpan.textContent = words[wordIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    wordIndex++;
    if (wordIndex >= words.length) {
      wordIndex = 0;
    }
    isTyping = true;
    setTimeout(type, 500);
  }
}

function updateCursor() {
  cursor.classList.toggle("blink");
}

function startTyping() {
  setInterval(() => {
    if (isTyping) {
      updateCursor();
    }
  }, 500);
  type();
}

window.addEventListener("load", startTyping);
