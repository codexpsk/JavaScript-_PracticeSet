let n = 5;
let str = "";
for (let i = n; i > 0; i--) {
  //   console.log(i);
  for (let k = 0; k < n - i; k++) {
    str += " ";
  }
  for (let j = 0; j < i; j++) {
    str += "*";
  }
  str += "\n";
}
console.log(str);
