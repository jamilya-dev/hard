'use strict';

const week = [
  'понедельник',
  'вторник',
  'среда',
  'четверг',
  'пятница',
  'суббота',
  'воскресенье'
]
let date = new Date();

let div = document.createElement('div');
div.className = "week";
div.innerHTML = "";

for (let key in week) {
  if (week[key] === 'суббота' || week[key] === 'воскресенье') {
    div.innerHTML += '<i>' + week[key] + '</i>' + '</br>';
  } else if (key == (date.getDay() - 1)) {
    div.innerHTML += '<b>' + week[key] + '</b>' + '</br>';
  } else {
    div.innerHTML += '<font>' + week[key] + '</font>' + '</br>';
  }
  document.body.append(div);
}




