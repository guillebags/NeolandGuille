const enough = (cap, on, wait) => {
  let fitted = 0;

  return cap - on < wait ? wait - (cap - on) : 0;

  //! Also
  // return Math.max(wait + on - cap, 0);
};

console.log(enough(10, 5, 5));
console.log(enough(20, 5, 5));
console.log(enough(10, 5, 50));
console.log(enough(5045, 120, 10248));
