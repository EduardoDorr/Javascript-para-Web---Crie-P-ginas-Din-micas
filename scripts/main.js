const keyList = document.querySelectorAll('.tecla');
const keyClear = document.querySelector('.tecla_limpar');
const keyTelephoneList = document.querySelectorAll('.tecla_telefone');

keyList.forEach(key => {
  key.addEventListener('click', function () {
    const element = document.querySelector(`#som_${key.classList[1]}`);
    playSound(element);
  });
  key.addEventListener('keydown', (event) => {
    if (event.keyCode === 13 || event.keyCode === 32)
      key.classList.add('ativa');
  })
  key.addEventListener('keyup', () => {
    key.classList.remove('ativa');
  });
});

keyTelephoneList.forEach(key => {
  key.addEventListener('click', pressKeyTelephone);
});

keyClear.addEventListener('click', clearNumber);

function playSound(element) {
  if (element === null) {
    console.log('Elemento não encontrado');
    return;    
  }
  
  if (element.play === undefined) {
    console.log('Elemento não tem método play');
    return;
  }

  element.play();
}

function pressKeyTelephone() {
  document.querySelector('#numero_telefone').value += this.value;
}

function clearNumber() {
  document.querySelector('#numero_telefone').value = '';
}
