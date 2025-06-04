let hp = 200;
let maxHp = 200;
let mp = 100;
let maxMp = 100;
let snakeHp = 220;
let maxSnakeHp = 220;
let lizardHp = 0;
let maxLizardHp = 0;

let gameOver = false;

function updateBars() {
    document.getElementById("hpText").textContent = hp;
    document.getElementById("mpText").textContent = mp;
    document.getElementById("hpBar").style.width = (hp / maxHp * 100) + "%";
    document.getElementById("mpBar").style.width = (mp / maxMp * 100) + "%";
    document.getElementById("snakeHealth").style.width = (snakeHp / maxSnakeHp * 100) + "%";
    document.getElementById("lizardHealth").style.width = (lizardHp / maxLizardHp * 100) + "%";
  
    const playerHealthInner = document.getElementById("playerHealthBarInner");
    playerHealthInner.style.width = (hp / maxHp * 100) + "%";
  }

function checkGameOver() {
  if (snakeHp === 0 && lizardHp === 0) {
    log("🎉 You win the battle!");
    disableButtons();
    gameOver = true;
    if (confirm("Continue to next Cutscene")) {
        window.location.href = "Cutscene2.html";
      }
  } else if (hp === 0) {
    log("💀 You have been defeated!");
    disableButtons();
    if (confirm("Try Again?")) {
      window.location.href = "f1 index.html";
    }
    gameOver = true;
  }
}

function disableButtons() {
  document.querySelectorAll("button").forEach(button => {
    button.disabled = true;
  });
}

function enableButtons() {
  document.querySelectorAll("button").forEach(button => {
    button.disabled = false;
  });
  gameOver = false;
}

function enemyAttack() {
  if (gameOver) return;

  const damage = Math.floor(Math.random() * 10) + 5;
  hp -= damage;
  if (hp < 0) hp = 0;
  log(`⚔️ The enemy attacks you for ${damage} damage!`);
  updateBars();
  checkGameOver();
}

function dealDamageToEnemy(enemyId, damage) {
  if (enemyId === 'snake') {
    snakeHp -= damage;
    if (snakeHp < 0) snakeHp = 0;
    log(`💢 Demon Master takes ${damage} damage!`);
    showEnemyDamageText('snake', damage);}

  checkGameOver();
}

function showEnemyDamageText(enemyId, damage) {
  const damageText = document.createElement("div");
  damageText.classList.add("enemy-damage-text");
  damageText.textContent = `-${damage}`;

  const container = document.getElementById(enemyId + "Container");
  container.appendChild(damageText);

  setTimeout(() => {
    damageText.remove();
  }, 1000);
}

function log(msg) {
  const logBox = document.getElementById("battleLog");
  const logMsg = document.createElement("div");
  logMsg.textContent = msg;
  logBox.appendChild(logMsg);
  logBox.scrollTop = logBox.scrollHeight;
}

function castFire() {
  if (mp >= 5 && !gameOver) {
    mp -= 5;
    log("🗡 You Swing Your Sword!");

    const fireball = document.createElement('div');
    fireball.classList.add('fireball');
    document.getElementById('battle').appendChild(fireball);

    fireball.style.left = "50px"; 
    fireball.style.bottom = "120px"; 

    setTimeout(() => {
      dealDamageToEnemy('snake', 25);
      dealDamageToEnemy('lizard', 20);
      fireball.remove();
    }, 1000);
  } else {
    log("Not enough MP or game is over!");
  }
  updateBars();
}

function bladeOfTheAncients() {
  if (mp >= 30 && !gameOver) {
    mp -= 30;
    log("⚔️ You unleash the ultimate Blade of the Ancients!");

    const bladeEffect = document.createElement('div');
    bladeEffect.classList.add('blade-ancients-effect');
    document.getElementById('battle').appendChild(bladeEffect);

    dealDamageToEnemy('snake', 30);

    setTimeout(() => bladeEffect.remove(), 1000);
  } else {
    log("Not enough MP for Blade of the Ancients or game is over!");
  }
  updateBars();
}

function drinkPotion() {
  if (hp < maxHp && !gameOver) {
    hp += 40;
    mp -= 10;
    if (hp > maxHp) hp = maxHp;
    log("🧪 You drank a potion and healed 30 HP!");
    updateBars();
  } else {
    log("Your HP is already full or game is over!");
  }
}

let defending = false;
function defend() {
  if (gameOver) return;

  defending = true;
  log("🛡️ You brace for impact!");
  setTimeout(() => defending = false, 10000);
}

setInterval(enemyAttack, 2000);

setInterval(() => {
  if (mp < maxMp && !gameOver) {
    mp += 1; 
    if (mp > maxMp) mp = maxMp;
    updateBars();
  }
}, 500);

updateBars();
