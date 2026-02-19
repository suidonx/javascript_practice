function f(...args) {
  console.log(args.length);
  console.log(args[0] || "引数がありません");
}

f();
f(123);
f(1, 2, 3);
