const obj = { a: 1, b: 2, c: { d: 999 } };

const newObj = { ...obj };

console.log(obj === newObj);
// shallow copyしているため、別物でありfalse

obj.a = 99;
obj.b = 77;
obj.c.d = 0;

console.log(newObj);
// aとbはプリミティブな値なので値が渡されるので、変化なし
// cにはオブジェクトが入っているので、参照が渡される
// そのため、newObjのc.dは0となる。
// これがshallow copy

// キーをコピーしてから値をコピーにしにいく

// deep copyはその先のオブジェクトも再帰的に見に行って値を全てコピーする
// どの要素も参照をコピーしない
