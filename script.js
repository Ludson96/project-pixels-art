const black = document.getElementById('black');
const red = document.getElementById('red');
const blue = document.getElementById('blue');
const green = document.getElementById('green');

function selectColor(event) {
    const elementSelected = document.querySelector('.selected');
    elementSelected.classList.remove('selected');
    event.target.classList.add('selected')
}

black.addEventListener('click', selectColor);
red.addEventListener('click', selectColor);
blue.addEventListener('click', selectColor);
green.addEventListener('click', selectColor);