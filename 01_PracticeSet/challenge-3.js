// Challenge # 3 — Reversing letters and words

const reverse = function (str) {
  return str
    .split(" ")
    .map((item) => item.split("").reverse().join(""))
    .join(" ");
};

console.log(reverse("Hello World")); // Output: "olleH dlroW"
