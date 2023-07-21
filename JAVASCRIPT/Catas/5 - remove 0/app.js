const noBoringZeros = (n) => {
  return n === 0 ? 0 : Number(n.toString().replace(/0+$/, ""));
};

console.log(noBoringZeros(1450));
