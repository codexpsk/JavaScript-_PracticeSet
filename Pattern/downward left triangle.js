let n = 5;
let str = "";
for (let i = 0; i < n; i++) {
  for (let k = 0; k < n - i; k++) {
    // console.log(i, k);
    str += "*";
  }
  str += "\n";
}
console.log(str);
