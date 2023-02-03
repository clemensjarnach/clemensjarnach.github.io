/* This CSS code is based on code by Dawid Adach
and has been amended by Clemens Jarnach
see: https://github.com/mdbootstrap/knowledge-base/tree/main/JS/games/dino-game 
Copyright © 2023 DA and CJ */

const dino = document.getElementById("dino");    // in my case the dino is a palm tree.
const cactus = document.getElementById("cactus"); // in my case the cactus is a palm tree.
const birds = document.getElementById("birds");



let jumpCounter = 0;

const counterDisplay = document.getElementById("counter-display");

function updateCounterDisplay() {
  counterDisplay.innerHTML =  "Jump Count:" + jumpCounter;
}
updateCounterDisplay();


function jump() {
  if (dino.classList != "jump") {
    dino.classList.add("jump");
    jumpCounter++;
    updateCounterDisplay();
    setTimeout(function () {
      dino.classList.remove("jump");
    }, 300);
  }
}






document.addEventListener("keydown", function (event) {
  if (event.keyCode==32) {
  jump();
  }
  });

 
  let isAlive = setInterval(function () {
    // get current dino Y position
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));

    // get current cactus X position
    let cactusLeft = parseInt(
      window.getComputedStyle(cactus).getPropertyValue("left")
    );

       // detect collision
    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 150) {
        // collision
        jumpCounter = 0;
        updateCounterDisplay();
    }
  }, 100); // to make the game run slower or faster is  to increase or decrease the interval time. 

  document.addEventListener("keydown", function (event) {
    if (event.keyCode === 32) {
    jump();w
    }
  });



