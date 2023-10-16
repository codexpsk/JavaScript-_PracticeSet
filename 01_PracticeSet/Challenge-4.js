// Challenge # 4 — Generating all permutations

const permute_and_print = function (str) {
  permute("", str);
};

function permute(prefix, str) {
  let n = str.length;
  if (n == 0) {
    console.log(prefix);
  }

  if (n != 0) {
    for (let i = 0; i < n; i++) {
      permute(
        prefix + str.charAt(i),
        str.substring(i + 1, n) + str.substring(0, i)
      );
    }
  }
}
permute_and_print("ABC");
// console.log();
