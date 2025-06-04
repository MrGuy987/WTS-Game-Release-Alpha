const message = "Great Job! You have defeated Kako and have finally reached your family...";
const typedText = document.getElementById("typed-text");

let index = 0;

function typeWriter() {
  if (index < message.length) {
    typedText.textContent += message.charAt(index);
    index++;
    setTimeout(typeWriter, 70); // adjust speed here
  }
}

typeWriter();