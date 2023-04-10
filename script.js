'use strict'
function darkModeTog() {
  var doC = document.documentElement;
  var cL = doC.classList;
  cL.toogle('darkmode')
}
const tB = document.getElementById('set-theme');
tB.addEventListener("click", darkModeTog);
