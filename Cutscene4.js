const message = "I’m surprised. You have done well defeating the Twin Soul Keepers, this is quite the achievement. Many before you have failed in doing so. But beware brave warrior, as the foes you will soon face won’t be anywhere near the level of enemies you have challenged so far.";
const typedText = document.getElementById("typed-text");

let index = 0;

function typeWriter() {
  if (index < message.length) {
    typedText.textContent += message.charAt(index);
    index++;
    setTimeout(typeWriter, 65); // adjust speed here
  }
}

typeWriter();

function startWalk() {
    const player = document.getElementById('player');
    player.classList.add('walk-right');

    setTimeout(() => {
        window.location.href = 'f5 index.html';
    }, 1500);
}
