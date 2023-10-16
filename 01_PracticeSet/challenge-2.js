// Challenge # 2— Finding the first non-repeated character
const EXTENDED_ASCII_CODES = 256;
const firstNonRepeatedChar = function (str) {
  let flags = [];
  for (let i = 0; i < EXTENDED_ASCII_CODES; i++) {
    flags.push(-1);
  }
  for (j = 0; j < str.length; j++) {
    let char = str.charCodeAt(j);
    // console.log(char);

    if (flags[char] == -1) {
      flags[char] = j;
      //   console.log(flags[char]);
    } else {
      flags[char] = -2;
      //   console.log(flags[char]);
    }
  }
  let position = Number.MAX_SAFE_INTEGER;
  for (let k = 0; k < EXTENDED_ASCII_CODES; k++) {
    if (flags[k] >= 0) {
      //   console.log(flags[k]);
      position = Math.min(flags[k], position);
      //   console.log(position);
    }
  }

  return str[position];
};

console.log(firstNonRepeatedChar("assccd")); // Expected Output : a
console.log(firstNonRepeatedChar("ccbbs")); // Expected Output : s
console.log(firstNonRepeatedChar("cbcd")); // Expected Output : b
