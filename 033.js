let arr = ["2", "23", "0", "16"];

arr.sort((a, b) => a - b);
console.log(arr);

Object.freeze(arr);
arr.sort();

// オブジェクトの凍結
// 拡張を禁止、全てのプロパティのconfigurable, writableがfalseになる
