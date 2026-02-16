function add(x, y) {
  if (typeof y == "undefined") {
    return function (y) {
      return x + y;
    };
  }
  return x + y;
}

console.log(add(1, 2));
console.log(add(1)(2));

// カリー化はf(a, b, c)として呼び出せる関数をf(a)(b)(c)のように呼び出せるようにする
// 関数の変形のことを指します。
