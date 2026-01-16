const dino = document.querySelector('#dino');
const block = document.querySelector('#block');
const startBtn = document.querySelector('#startBtn');
let gameInterval;

console.log("Dino:", dino);
console.log("Block:", block);
console.log("Btn:", startBtn);

window.addEventListener("keydown", (event) => {
    if (event.code === 'Space') {
        if (!dino.classList.contains('jumpClass')) {
            dino.classList.add('jumpClass');
            setTimeout(() => {
                dino.classList.remove('jumpClass');
            }, 300);
        }
    }
});

if (startBtn) { 
    startBtn.addEventListener('click', () => {
        console.log("put down！");
        
        startBtn.style.display = 'none';
        block.classList.add('animateBlock');
        
        console.log("Try starting the game loop...");
        startGameLoop();
    });
} else {
    console.error("Button not found! Please check the HTML ID.");
}

function startGameLoop() {
    console.log("game loop start！");
    gameInterval = setInterval(() => {
        const dinoBottom = parseInt(getComputedStyle(dino).getPropertyValue("bottom"));
        const blockLeft = parseInt(getComputedStyle(block).getPropertyValue("left"));
        

        if (blockLeft < 20 && blockLeft > 0 && dinoBottom < 20) {
            block.style.animation = "none";
            block.style.display = "none";
            clearInterval(gameInterval);
            alert("Game Over! Press F5 to reorganize");
        }
    }, 10);
}
