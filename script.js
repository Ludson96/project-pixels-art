let black = document.getElementById('black');
let red = document.getElementById('red');
let blue = document.getElementById('blue');
let green = document.getElementById('green');
let pixel = document.getElementsByClassName('pixel');
let limpar = document.getElementById('clear-board');

function selectColor(event) {
  const elementSelected = document.querySelector('.selected');
  elementSelected.classList.remove('selected');
  event.target.classList.add('selected');
}

black.addEventListener('click', selectColor);
red.addEventListener('click', selectColor);
blue.addEventListener('click', selectColor);
green.addEventListener('click', selectColor);

function paintColor(event) {
  let elementSelected = document.getElementsByClassName('selected')[0];
  const cssSelected = getComputedStyle(elementSelected, null);

  let bgColor = cssSelected.getPropertyValue('background-color');
  event.target.style.backgroundColor = bgColor;
}

for (let index = 0; index < pixel.length; index += 1) {
  pixel[index].addEventListener('click', paintColor)
}

function clear() {
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].style.backgroundColor = 'white';
  }
}

limpar.addEventListener('click', clear);