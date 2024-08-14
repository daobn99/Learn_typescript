type Human = {
    name: string,
    age: number,
    hobby?: string, //// 趣味(「?」を付加したことで、オプショナル(任意)なプロパティになる)
}

const member1: Human = {
    name: "John",     // 必須
    age: 20,          // 必須
    hobby: "running", //任意
}; 
// => OK

const member2: Human = {
    name: 'Jiro',     // 必須
    age: 24,          // 必須
}
// => OK hobbyプロパティは任意のプロパティなので、存在していない場合でもエラーにならない

const member3: Human = {
    name: 'Hanako',   // 必須
    hobby: 'cooking'  // 任意
  }
  // => NG Human型では必須のageプロパティが足りないとエラーになる

console.log(member1["name"]);

//dùng dấu ? khi không chắc có muốn dùng property đó hay không (必須ではない)