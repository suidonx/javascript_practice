const array = [
  { name: "kenji", mail: "fafa@eee.com" },
  { name: "morita", mail: "kkk@faf.com" },
];

const array2 = [];
array.forEach((ele, i, a) => {
  for (let key in ele) {
    if (key === "mail") {
      array2.push(ele[key]);
    }
  }
});

console.log(array2);
