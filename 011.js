let arry = [
  { id: 1, name: "morita" },
  { id: 2, name: "kenji" },
  { id: 4, name: "uro" },
  { id: 3, name: "ken" },
];

// sort

arry.sort((a, b) => a.id - b.id);
console.log(arry);

// sortの比較関数は
// 戻り値が負：aが前に
// 戻り値が0：そのまま
// 戻り値が正:bが前に
