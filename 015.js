const array = ["a1", "a2", "a3", "a4", "a5"];

// array.splice(0, 2, "red", "green", "yellow");
const colors = ["red", "green", "yellow"];
console.log(array.splice(0, 2, ...colors));
console.log(array);

// spliceは破壊的メソッド
// 配列の要素の挿入、削除ができる
