let arr = [
  ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
];
let lang = 'ru';
if (lang === 'ru') {
  console.log(arr[1]);
} else if (lang === 'en') {
  console.log(arr[0]);
}
switch (true) {
  case (lang === 'ru'):
    console.log(arr[1]);
    break
  case (lang === 'en'):
    console.log(arr[0]);
    break
}
lang === 'ru' ? console.log(arr[1]) : console.log(arr[0])

let namePerson = 'Александр';
namePerson == 'Артем' ? console.log('директор') : namePerson == 'Александр' ? console.log('преподаватель') : console.log('студент');



