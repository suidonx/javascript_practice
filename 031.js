const obj = { x: 2 };
const descriptor = Object.getOwnPropertyDescriptor(obj, "x");

console.log(descriptor);
const obj2 = { x: 2 };
Object.defineProperty(obj2, "y", {
  value: 2,
  writable: true,
  enumerable: true,
  configurable: true,
});

console.log(Object.getOwnPropertyDescriptor(obj2, "y"));

// writable: false
// そのプロパティのvalueを書き換えられない

// enumerable
// そのプロパティが列挙できるのかどうか
// for ... inなどで表示されない

// configurable
// プロパティの削除、ディスクリプタ(属性)を変更できるのかどうか
