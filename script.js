'use strict'

function hiddenNumber(num, index) {
  if (index > 0) {
    let number = +prompt('Угадай число от 1 до 100');
    index--;
    return function conditions() {
      if (number === null || number === 0) {
        alert('Игра окончена');
        return;
      }
      if (isNaN(number) || number === '') {
        if (index > 0) {
          number = +prompt('Введи число! Осталось попыток - ' + index);
          index--;
          conditions();
          return;
        } else {
          alert('Игра окончена, у вас закончились попытки!');
          return;
        }
      }

      if (number > num) {
        if (index > 0) {
          number = +prompt('Загаданное число меньше! Осталось попыток - ' + index);
          index--;
          conditions();
        } else {
          alert('Игра окончена, у вас закончились попытки!');
          return;
        }
      } else if (number < num) {
        if (index > 0) {
          number = +prompt('Загаданное число больше! Осталось попыток - ' + index);
          index--;
          conditions();
        } else {
          alert('Игра окончена, у вас закончились попытки!');
          return;
        }
      } else if (number === num) {
        let playAgain = confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?');
        if (playAgain) {
          let play = hiddenNumber(Math.floor(Math.random() * 100) + 1, 10);
          play();
        } else {
          return;
        }
      }
    };
  }
}

const func = hiddenNumber(Math.floor(Math.random() * 100) + 1, 10);
func();