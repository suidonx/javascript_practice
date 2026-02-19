const arr = ["f", "o", "x", "k"];
const it = arr[Symbol.iterator]();

console.log(it.next());

// arrのプロパティSymbol.iteratorにイテレーターを生成する関数が用意されている
// その関数を呼び出してイテレーターオブジェクトをitに定義

// nextメソッドでループが終わったかどうかのdoneと取得した要素valueを返す
