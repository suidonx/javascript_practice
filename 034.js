let arr = [3, 4, 5];
const arr2 = [...arr];
arr2[0] = 123;
console.log(arr);

// 要素をコピーしているからarrは変更されない
