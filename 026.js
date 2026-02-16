function Factory(name) {
  const factoryIntroduce = {
    introduce() {
      return name;
    },
  };
  return factoryIntroduce;
}

const fafa = Factory("morita");
console.log(fafa.introduce());

// fafaはfactoryIntroduceというオブジェクトを受け取る

// Factoryによって作られたオブジェクトのメソッドintroduceは、そのメソッドが定義された時、参照していた変数の値を保持する
// これがクロージャー
// よってfactoryIntroduce自体にnameは定義されていないが、外側のnameにアクセスすることができる
// そして、nameも参照され続けてるため、関数が存在する限り
// メモリにも残り続ける

// 関数もオブジェクトなのでプロパティとしてメソッドを追加できるけれど
// method() {}という記法や
// method: function() {};という記法はできない
// (ラベルになる)
