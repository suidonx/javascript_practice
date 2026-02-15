const array = ["おはよう", "こんにちは", "おやすみなさい"];

// mdnより参照
function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // 上限は除き、下限は含む
}

console.log(array[getRandomInt(0, 3)]);
