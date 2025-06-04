const message = "Looks like the enemies are gradually getting increasingly difficult to defeat; nonetheless, you managed to overcome your foes. With every battle surpassed, the closer you are to your family but also to the leader of all this chaos - Zluv Tyrannos. He is an infamous criminal with the notorious reputation of showing no mercy to anyone who comes across him. He fights dirty and will even harm his own allies just to earn the victory. ";
const typedText = document.getElementById("typed-text");

let index = 0;

function typeWriter() {
  if (index < message.length) {
    typedText.textContent += message.charAt(index);
    index++;
    setTimeout(typeWriter, 60); // adjust speed here
  }
}

typeWriter();

function startWalk() {
    const player = document.getElementById('player');
    player.classList.add('walk-right');

    setTimeout(() => {
        window.location.href = 'f4 index.html';
    }, 1500);
}
