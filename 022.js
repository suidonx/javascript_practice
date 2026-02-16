let array = ["e", "a", "k", "B", "c"];

array.sort((a, b) => {
  return a.toUpperCase().codePointAt() - b.toUpperCase().codePointAt();
});

console.log(array);

// a.toUpperCase() > b.toUpperCase() ? 1 : -1
// 1の時、bが先に来る
// -1の時、aが先に来る
// a, bの時、1ならb,a -1ならa, bという並びになる
// 1なら並び替えするということ
