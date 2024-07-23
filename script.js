let lang = 'ru';
if (lang === 'ru') {
  console.log('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье');
} else if (lang === 'en') {
  console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
}
switch (true) {
  case (lang === 'ru'):
    console.log('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье');
    break
  case (lang === 'en'):
    console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
    break
}
let arr = [
  ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
];
lang === 'ru' ? console.log(arr[1]) : console.log(arr[0])

let namePerson = 'Александр';
namePerson == 'Артем' ? console.log('директор') : namePerson == 'Александр' ? console.log('преподаватель') : console.log('студент');



