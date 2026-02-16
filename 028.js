let obj = { x: 2, y: 3 };
Object.preventExtensions(obj); // プロパティの追加を不可にする
obj.z = 1;
console.log(obj); // zが追加されない

delete obj.x; // xを削除できる
console.log(obj);

console.log(Object.isExtensible(obj)); // false
