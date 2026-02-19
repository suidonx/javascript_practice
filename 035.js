const getSum = (a, b) => {
  if (a === undefined) {
    throw new Error(`throws a is not defined`);
  } else if (b === undefined) {
    throw new Error(`throws b is not defined`);
  }
  return a + b;
};

// const a = getSum(10);
// const b = getSum(undefined, 10);
const c = getSum(10, 10);

// console.log(a);
// console.log(b);
console.log(c);
