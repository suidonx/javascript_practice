let obj = Object.create(Object.prototype, {
  x: { value: 2, writable: true, enumerable: true, configurable: true },
  y: { value: 3, writable: true, enumerable: true, configurable: true },
});

console.log(obj);
