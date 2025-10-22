const textElement = document.getElementById("text");
const text = "LIVE ON";
let index = 0;
let deleting = false;

function typeEffect() {
  if (!deleting) {
    textElement.textContent = text.slice(0, index++);
    if (index > text.length) {
      deleting = true;
      index = text.length - 1;
    }
  } else {
    textElement.textContent = text.slice(0, index--);
    if (index < 0) {
      deleting = false;
      index = 0;
    }
  }

  const speed = deleting ? 80 : 150;
  setTimeout(typeEffect, speed);
}

typeEffect();
