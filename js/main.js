function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (max <= min) {
    console.log('Функция не работает');
  }
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomArbitrary(min, max) {
  if (max <= min) {
    console.log('Функция не работает');
  }
  return Math.random() * (max - min) + min;
}


