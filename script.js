'use strict';

function showStr(string) {
  if ((typeof string) !== 'string') {
    return 'Это не стока!';
  } else if ((typeof string) === 'string') {
    string = string.trim()
    if (string.length > 30) {
      string = string.substring(0, 30) + '...';
    }
    return string;
  }
}

showStr('  В полученной (как аргумент) строке функция должна убрать все пробелы в начале и в конце  ');