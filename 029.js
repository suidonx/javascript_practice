let obj1 = {};
let obj2 = Object.create(Object.prototype);
// obj2に対して内部プロパティ[[prototype]]を作り
// Objectコンストラクタのprototypeにアクセスできるようにする
// Object.prototypeにはtoStringなどのメソッドが定義されている

// {}はシンタックスシュガー

console.log(Object.getPrototypeOf(obj1) === Object.prototype); // true
console.log(Object.getPrototypeOf(obj2) === Object.prototype); // true
