function Who(name) {
  this.name = name;
}

// prototypeにインスタンスメソッドを定義する
Who.prototype.getName = function () {
  return this.name;
};

// インスタンスが持っている内部プロパティ[[prototype]]はコンストラクタのprototypeを参照する
// 当然、a.prototypeではアクセスできない
// メモリ効率のために、コンストラクタのprototypeにメソッドを登録する
// インスタンスごとにメソッドを持たせるとメモリを圧迫する
// これのシンタックスシュガーがclass構文

// ちなみに、静的メソッドの場合はコンストラクタ自身に登録される。

const userName = new Who("morita");
console.log(userName);
