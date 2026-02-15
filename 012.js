console.log("--func--");
const fn = (a = 5, b = 7) => {
  console.log(a, b);
  a = 1;
  console.log(a, b);
};

fn();

console.log("--object--");
let { a = 5, b = 7 } = {};

console.log(a, b);
a = 1;

console.log(a, b);
