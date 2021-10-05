function random(min, max) {
  if (max > min) {
    console.log('Функция работает');
    //      5  +  от 0.1 до 0.9 * (99 - 5)
    return Math.random() * (max - min) + min;
  } else {
    console.log('Функция не работает');
    return null
  }
}

random(0, 99)

function random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (max > min) {
    console.log('Функция работает');
    return Math.floor(Math.random() * (max - min)) + min;
  } else {
    console.log('Функция не работает');
    return null
  } 
}

random(0, 99)


// lernjavascrirt.ru
// почитать про функции, про циклы https://learn.javascript.ru/first-steps
// посмотреть праивльную версию получения числа в диапазоне



