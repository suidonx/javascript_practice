[0, 1, 2, 3, 4].some(function (val, i) {
  if (val === 2) {
    // how do we stop?
    return true;
  }
  console.log(val);
});
// 0, 1, 3, 4
