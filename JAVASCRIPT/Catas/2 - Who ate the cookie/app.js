//!For this problem you must create a program that says who ate the last cookie. If the input is a string then "Zach" ate the cookie. If the input is a float or an int then "Monica" ate the cookie. If the input is anything else "the dog" ate the cookie. The way to return the statement is: "Who ate the last cookie? It was (name)!"

const cookie = (x) => {
  let name = "";

  if (typeof x === "string") {
    name = "Zach";
  } else if (typeof x === "number") {
    name = "Monica";
  } else {
    name = "the dog";
  }
  return `Who ate the last cookie? It was ${name}!`;
};
