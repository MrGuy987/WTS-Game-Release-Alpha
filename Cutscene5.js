const message = "You’ve succeeded in shocking me again. The Cardenage or any beast of the sort will no longer wreak havoc here. Now, prepare to leave your hometown of Ghalis and set off to Aero City as that is where I believe your family inhabits at the moment. Continue to fight with honour, brave hero. ";
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

function startWalk() {
    const player = document.getElementById('player');
    player.classList.add('walk-right');

    setTimeout(() => {
        window.location.href = 'f6 index.html';
    }, 1500);
}
