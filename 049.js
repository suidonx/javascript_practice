const arr = [
  ["one", "info@fa"],
  ["two", "send@fafa"],
  ["three", "hoso@fafa"],
];

const fn = (arrays) => {
  for (const array of arrays) {
    if (array[0] === "two") {
      return array[1];
    }
  }
};

console.log(fn(arr));

const map = new Map(arr);
map.get("two");
//'send@fafa'
console.log(map);

// Mapのコンストラクタにはエントリーの配列を渡すことができる
// エントリーとは[キー, 値]で表現したもの
