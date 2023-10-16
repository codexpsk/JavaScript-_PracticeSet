// Solution # 1
// The first solution iterates the string characters and use a dictionary <key, value> to store the characters as keys and the number of occurrences as values.

var str = "adsjfdsfsfjsdjfhacabcsbajda";
function duplicateCharCount(str) {
  str = str.toLowerCase();
  let arr = {};
  for (let i = 0; i < str.length; i++) {
    if (Object.keys(arr).includes(str[i])) {
      Object.assign(arr, { [str[i]]: ++arr[str[i]] });
      continue;
    }
    arr[str[i]] = 1;
  }

  let allKeys = Object.keys(arr);
  allKeys.sort();
  let result = {};
  for (let j = 0; j < allKeys.length; j++) {
    result[allKeys[j]] = arr[allKeys[j]];
  }
  return result;
}

var result = duplicateCharCount(str);
console.log(result);
// Expected Output : { a: 5, b: 2, c: 2, d: 4, f: 4, h: 1, j: 4, s: 5 }

// Solution # 2
// We turn the string into a character array and then sort the array and put them together to form a new string. As this string is sorted, we can use a regular expression (here is /(.)\1*/g) to match the repeated characters.

var str = "adsjfdsfsfjsdjfhacabcsbajda";

const duplicate_char_count = function (str) {
  let result = {};
  let arr = str
    .toLowerCase()
    .split("")
    .sort()
    .join("")
    .match(/(\w)\1*/g);
  if (arr !== null) {
    arr.forEach((item) => {
      result[item[0]] = item.length;
    });
  }
  return result;
};
console.log(duplicate_char_count(str));
// Expected Output : { a: 5, b: 2, c: 2, d: 4, f: 4, h: 1, j: 4, s: 5 }
