'use strict'

const spinner = document.querySelector('.spinner');
  let rotate = 0;
//create the rotation function
  function spin() {
    rotate += 6;
    spinner.style.transform = `rotate(${rotate}deg)`;
    requestAnimationFrame(spin);
  }



