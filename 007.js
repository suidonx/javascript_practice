let x;
if (x === void 0) {
}

//2
// 直前まで y は宣言されていない
if (y === void 0) {
}

/*
6と同じで、宣言されていない変数を評価するときにReferenceErrorとなる

void 演算子の定義
式を評価して、その結果を捨て、undefined を返す

undefinedとした方が可読性も高い
基本使わない記法

*/
