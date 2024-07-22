let num = 266219;
// let numStr = num.toString();
let arr = num.toString().split("");
let res = 1;
for (let i = 0; i < arr.length; i++) {
  res *= arr[i];
}
console.log(res);
res = (res ** 3);
let resStr = res.toString().substring(0, 2);
console.log(resStr);
