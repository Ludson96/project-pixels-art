let elementContainer = document.querySelectorAll('div')[4];
console.log(elementContainer);

  for (let index = 1; index <= 5; index += 1) {
    let quadrado = createDiv();
    elementContainer.appendChild(quadrado);
  }

repeteElemeto();

function createDiv() {
  let element = document.createElement('div');
  element.className = 'selecionavel';
}

createDiv();