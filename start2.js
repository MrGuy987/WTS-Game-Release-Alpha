const sentences = [
  "The only thing left of them are cryptic messages scratched into the ground,",
  " hinting at the Zluvs' sinister intentions. ",
  "He swears an oath of vengeance, ",
  "vowing to find his family and bring them back, ",
  "no matter the cost...",
];

const container = document.getElementById("story-text");
const startButton = document.getElementById("start-button");

let currentSentence = 0;

function showNextSentence() {
  if (currentSentence < sentences.length) {
    const p = document.createElement("h2");
    p.textContent = sentences[currentSentence];
    p.classList.add("sentence-fade-in");
    container.appendChild(p);

    currentSentence++;
    setTimeout(showNextSentence, 2200);
  } else {
    // Show button with fade-in after all sentences
    startButton.classList.add("visible");
  }
}

// Start showing sentences after a short delay
window.onload = () => {
  setTimeout(showNextSentence, 500);
};