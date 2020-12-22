import { radioInit} from './radio.js';
import { musicInit} from './music.js';
import { videoPlayerInit } from './video.js';

const playerBtn = document.querySelectorAll('.player-btn');
const playerBlock = document.querySelectorAll('.player-block');
const temp = document.querySelector('.temp');


const deactivation = () => {
    temp.style.display = 'none'
    playerBlock.forEach(item => item.classList.remove('active'));
    playerBtn.forEach(item => item.classList.remove('active'));
}

playerBtn.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        deactivation();
      btn.classList.add('active');  
      playerBlock[i].classList.add('active')
    })
})

videoPlayerInit();
musicInit();
radioInit();
