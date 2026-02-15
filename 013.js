function factoryCountUp() {
  let res = 0;
  const countUp = () => {
    res += 1;
    return res;
  };
  return countUp;
}

const next = factoryCountUp();
for (let i = 0; i < 10; i++) {
  console.log(next());
}
