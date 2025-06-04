const sentences = [
  "In the land of Lutharion, the village of Ghalis knew only peace.",
  "Until one night under a blood-red moon, everything changed…",
  "An ancient evil - The Zluvs - descended upon the village.",
  "They took the crops.",
  "They took the people.",
  "And they took something far worse… Galistan’s family.",
  "Now, armed with his father's blade and an unbreakable will,",
  "Galistan embarks on a perilous journey across a fractured realm.",
  "His goal: to rescue his family…",
  "And uncover the truth behind the darkness rising.",
  "But will he save them in time—",
  "or will the world fall into the hands of a forgotten goddess?"
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