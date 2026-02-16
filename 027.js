const sayHi = function (name) {
  return name ? "hello" + name : "hello";
};

console.log(sayHi.apply());
console.log(sayHi.apply(null, ["morita"]));

// applyの第一引数でnullを指定すると、thisはnullになる
// オブジェクトを渡すと、thisがそのオブジェクトに指定される

// applyは配列を引数に渡すときに使われていたが、今ではスプレッド構文があるのでその用途では使わない
// thisを変えるケースで使われる
