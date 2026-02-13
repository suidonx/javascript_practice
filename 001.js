const a = { a: "a" };
const b = { b: "b" };

const c = { ...a, ...b };
console.log(c);

/*
オブジェクトのスプレッド構文
aとbを展開して、1つの新しいオブジェクトcを作成している
*/
