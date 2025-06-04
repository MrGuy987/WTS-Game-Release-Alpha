const message = "Good job. You have defeated the first stage enemies; securing your first step in finding your dear family. Thanks to you, the demon underlings will think twice before coming back. I hope your journey is a success, fellow adventurer.";
const typedText = document.getElementById("typed-text");

let index = 0;

function typeWriter() {
  if (index < message.length) {
    typedText.textContent += message.charAt(index);
    index++;
    setTimeout(typeWriter, 50); // adjust speed here
  }
}

typeWriter();

function startWalk() {
    const player = document.getElementById('player');
    player.classList.add('walk-right');

    // Wait for the animation to finish (1.5s), then go to the next page
    setTimeout(() => {
        window.location.href = 'f2 index.html';
    }, 1500);
}
