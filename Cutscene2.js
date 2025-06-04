const message = "Well done. You have brought your village peace and harmony once again by defeating the feared Overlord of the Demons. Although this was your first boss, you still displayed courage and did you see that? The Demon Master trembled in your midst. Strange, no one else has ever fazed him…";
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

    setTimeout(() => {
        window.location.href = 'f3 index.html';
    }, 1500);
}
