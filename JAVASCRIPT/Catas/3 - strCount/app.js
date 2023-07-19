const strCount = (str, letter) => {
  let counter = 0;
  for (elem of str) {
    elem == letter && counter++;
  }
  return counter;
};

console.log(strCount("Hello", "o")); // returns 1
console.log(strCount("Hello", "l")); // returns 2
console.log(strCount("", "z")); // returns 0
