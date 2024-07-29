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
console.log(date.getDay())
date.getDay();

for (let key in week) {
  if (week[key] === 'суббота' || week[key] === 'воскресенье') {
    document.write('<i>' + week[key] + '</i>' + '</br>')
  } else if (key == (date.getDay() - 1)) {
    document.write('<b>' + week[key] + '</b>' + '</br>')
  } else {
    document.write('<font>' + week[key] + '</font>' + '</br>')
  }
}


