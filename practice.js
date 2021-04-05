let firstBtn = document.querySelector('#first-btn');
let secBtn = document.querySelector('#sec-btn');
let thirdBtn = document.querySelector('#third-btn');
let firstCont = document.querySelector('#first-cont');
let secCont = document.querySelector('#sec-cont');
let thirdCont = document.querySelector('#third-cont');

firstBtn.addEventListener('click', () => firstCont.style.color = 'red');
secBtn.addEventListener('click', () => secCont.style.color = 'green');
thirdBtn.addEventListener('click', () => thirdCont.style.color = 'yellow');


