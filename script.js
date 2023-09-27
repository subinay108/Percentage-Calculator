const form = document.querySelector('.form');
const sem1 = document.getElementById('sem1');
const sem2 = document.getElementById('sem2');
const result = document.getElementById('result');
const calculateBtn = document.querySelector('.calculate');

form.addEventListener('submit', e =>{
    e.preventDefault();
    const percentage = (sem1.value * 700 + sem2.value * 850) / 1550;
    result.innerText = `Overall Percentage is ${percentage.toFixed(2)}`;
    isClear = false;
});

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
// We listen to the resize event
window.addEventListener('resize', () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});