// const obj = Object.create({});
// obj.p = 1;
// console.log(obj);

const obj = Object.create({}, { p: { value: 1 } });
console.log(obj); // {}
console.log(obj.p); // 1

// 第二引数にはプロパティディスクリプタを指定する
// 各プロパティを省略しているため、値がfalseになる

// p: {
//   value: 1,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }
