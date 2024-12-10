const sun = document.getElementById('sun');

const width = window.innerWidth;
const height = window.innerHeight;


let progress = 0;
const speed = 0.0015;
const delay = 3000;


function animateSun() {
    const x = progress * width;

    const y = -Math.abs(Math.sin(progress * Math.PI)) * (height / 2.5) + (height / 1.8);


    sun.style.left = `${x - 50}px`;
    sun.style.top = `${y - 50}px`; 


    if (x >= width - 100) {
        sun.style.opacity = 0;
    } else {
        sun.style.opacity = 1;
    }

    progress += speed;
    
    if (progress > 1) {
        progress = 0;
        setTimeout(animateSun, delay);
        return; 
    }


    requestAnimationFrame(animateSun);
}

animateSun();
