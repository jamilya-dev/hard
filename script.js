'use strict';

const monts = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const hours = ["час", "часа", "часов"];

let dateOne = document.createElement('div');
let dateTwo = document.createElement('div');

const numWord = function (hour) {
  if (hour === 1) {
    return hours[0];
  } else if (hour > 1 && hour < 5) {
    return hours[1];
  } else {
    return hours[2];
  }
}

const showTime = setInterval(function () {
  const date = new Date();
  const shortDate = date.toLocaleString("ru")
  dateOne.textContent = 'Сегодня ' + days[date.getDay()] + ' ' + date.getDate() + ', ' + monts[date.getMonth()] + ' ' + date.getFullYear() + ' года, ' + date.getHours() + ' ' + numWord(date.getHours()) + ' ' + date.getMinutes() + ' минут ' + date.getSeconds() + ' секунды';
  dateTwo.textContent = shortDate;
}, 1000)

document.body.append(dateOne);
document.body.append(dateTwo);