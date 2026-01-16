
const dino = document.querySelector('#dino');
const block = document.querySelector('#block');

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

setInterval(() => {
    const dinoBottom = parseInt(
        getComputedStyle(dino).getPropertyValue("bottom")
    );
    const blockLeft = parseInt(
        getComputedStyle(block).getPropertyValue("left")
    );  
    if (blockLeft < 20 && blockLeft > -20 && dinoBottom <= 20){
        block.style.animation = "none"; 
        block.style.display = "none";
        alert("Game Over!");
    }
}, 10);
