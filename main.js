const dino = document.querySelector('#dino');
const block = document.querySelector('#block');
const startBtn = document.querySelector('#startBtn');
let gameInterval;

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


startBtn.addEventListener('click', () => {
    startBtn.style.display = 'none'; 
    block.classList.add('animateBlock');
    startGameLoop();
});


function startGameLoop() {
        
    gameInterval = setInterval(() => {
        
       
        const dinoBottom = parseInt(getComputedStyle(dino).getPropertyValue("bottom"));
        const blockLeft = parseInt(getComputedStyle(block).getPropertyValue("left"));

        if (blockLeft < 20 && blockLeft > 0 && dinoBottom < 20) {
            
            block.style.animation = "none"; 
            block.style.display = "none";

            clearInterval(gameInterval);
            
            setTimeout(() => {
                alert("Game Over! 按 F5 重新整理");
            }, 100);
        }

    }, 10);
}
