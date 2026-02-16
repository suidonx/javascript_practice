const str = "10";
const strToNumber = Number(str);

if (typeof strToNumber === "number") {
  console.log(String(strToNumber));
}

console.log(isNaN("123"));
console.log(isNaN(123));

// isNaNは"123"もnumber型と判定してしまう
// Number.isNaNかtypeofを使う
