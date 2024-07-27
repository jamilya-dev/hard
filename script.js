'use strict';

const arr = [
  '4646687465242',
  '73722028262527920',
  '29585756',
  '686764098756',
  '4373820202827',
  '285756454960698',
  '57590329732672567'
]

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

for (let i = 0; i < arr.length; i++) {
  if (arr[i][0] == '2' || arr[i][0] == '4') {
    console.log(arr[i]);
  } else {
    continue
  }
}

for (let i = 0; i <= 100; i++) {
  if (isPrime(i)) {
    console.log(i);
  }
}