if (typeof x === "undefined") {
}
// typeofは例外で宣言してなくても使える
// 実務では使わない
// xが存在しないのに、エラーが出ないから。

if (x === undefined) {
}
// xは定義されていないのでReference Errorとなる
// まずxを評価しようとしてエラーになる
