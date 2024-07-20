let num = 266219;
let numStr = num.toString();
let arr = numStr.split("");
let res = 1;
for (let i = 0; i < arr.length; i++) {
  res *= arr[i];
}
console.log(res);
res = (res ** 3);
let resStr = res.toString();
console.log(resStr.substr(0, 2));
