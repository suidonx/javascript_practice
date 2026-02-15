const obj = {
  key: "aa",
  key2: "bb",
};

const obj2 = Object.create(obj);
obj2.key3 = "cc";

console.log("-- for in --");
for (const key in obj2) {
  console.log(key);
}

console.log("-- hasOwnProperty --");
for (const key in obj2) {
  if (obj2.hasOwnProperty(key)) {
    console.log(key, obj2[key]);
  }
}

// for ... inは継承したプロパティも全て列挙する
// prototypeチェーン上の要素も列挙してしまう

// hasOwnPropertyで自分自身に属するプロパティか判定

// Object.create()は指定したオブジェクトを継承元として新しくオブジェクトを作る
// const obj2 = Object.create(obj);
// objを継承したobj2を作成
// これを簡単にしたのがclass

// console.log(obj2.__proto__ === obj);
// __proto__は継承元のオブジェクトを参照できる
// プロトタイプチェーンはこれを辿ってプロパティを探していく
