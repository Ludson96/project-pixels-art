const black = document.getElementById('black');
const red = document.getElementById('red');
const blue = document.getElementById('blue');
const green = document.getElementById('green');
const pixel = document.getElementsByClassName('pixel');
const limpar = document.getElementById('clear-board');

function selectColor(event) {
  const elementSelected = document.querySelector('.selected');
  elementSelected.classList.remove('selected');
  event.target.classList.add('selected');
}

black.addEventListener('click', selectColor);
red.addEventListener('click', selectColor);
blue.addEventListener('click', selectColor);
green.addEventListener('click', selectColor);

// CRIANDO MEU BOARD
function createBoard() {
  for (let linha = 0; linha < 5; linha += 1) {
    const newLi = document.createElement('li');
    const getPixelBoard = document.getElementById('pixel-board');
    getPixelBoard.appendChild(newLi);
    for (let coluna = 0; coluna < 5; coluna += 1) {
      const newDiv = document.createElement('div');
      newDiv.className = 'pixel';
      newLi.appendChild(newDiv);
    }
  }
}
createBoard();

// Função evento de limpar
function clear() {
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].style.backgroundColor = 'white';
  }
}

limpar.addEventListener('click', clear);

// // Requisito 10
// RESTRIÇÃO DO INPUT
function restricaoInput() {
  const newInput = document.createElement('input');
  newInput.setAttribute('type', 'number');
  newInput.setAttribute('value', 'default');
  newInput.setAttribute('max', '50');
  newInput.setAttribute('min', '1');
  newInput.id = 'board-size';
  const board = document.getElementById('board');
  board.appendChild(newInput);
}
restricaoInput();

// botão VQV
function btnVQV() {
  const vqv = document.createElement('input');
  vqv.id = 'generate-board';
  vqv.setAttribute('type', 'submit');
  vqv.setAttribute('value', 'VQV');
  vqv.innerText = 'VQV';
  const board = document.getElementById('board');
  board.appendChild(vqv);
}
btnVQV();

// APAGANDO PIXELS
function redPixels() {
  const getLi = document.querySelectorAll('li');
  for (let index = 0; index < getLi.length; index += 1) {
    getLi[index].remove();
  }
}

// CRIANDO PIXELS COM O VALOR DO INPUT
function createPixels(n) {
  for (let linha = 0; linha < n; linha += 1) {
    const newLi = document.createElement('li');
    const getPixelBoard = document.getElementById('pixel-board');
    getPixelBoard.appendChild(newLi);
    for (let coluna = 0; coluna < n; coluna += 1) {
      const newDiv = document.createElement('div');
      newDiv.className = 'pixel';
      newLi.appendChild(newDiv);
    }
  }
}

// VERIFICANDO TAMANHO DO MEU BOARD
function verificaTamanho(n) {
  if (n === '') {
    alert('Board inválido!');
    createPixels(5)
  } else if (n < 5) {
    createPixels(5);
  } else if (n > 50) {
    createPixels(50);
  } else {
    createPixels(n);
  }
}

// // Requisito 12 - gerar cor aleatória
// https://www.horadecodar.com.br/2022/01/16/gerar-cor-aleatoria-com-javascript/
function generateColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i += 1) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

red.style.backgroundColor = generateColor();
blue.style.backgroundColor = generateColor();
green.style.backgroundColor = generateColor();

// PINTANDO OS QUADRADOS
function paintColor(event) {
  const elementSelected = document.getElementsByClassName('selected')[0];
  const cssSelected = getComputedStyle(elementSelected, null);

  const bgColor = cssSelected.getPropertyValue('background-color');
  const evento = event;
  evento.target.style.backgroundColor = bgColor;
}
for (let index = 0; index < pixel.length; index += 1) {
  pixel[index].addEventListener('click', paintColor);
}

// PEGANDO O VALOR DO INPUT
function valueInput(event) {
  event.preventDefault();
  const input = document.querySelector('#board-size');
  const n = input.value;
  redPixels();
  verificaTamanho(n);
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].addEventListener('click', paintColor);
  }
}

const getSubmit = document.querySelector('#generate-board');
getSubmit.addEventListener('click', valueInput);
