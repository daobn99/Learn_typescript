//parseInt : đổi string sang int
const price = parseInt("10");
console.log(price);  //10


const price1 = parseInt("abc");
console.log(price1);   //NaN : not a number : do abc không đổi được thành số nguyên nên bị trả về NaN

console.log(`実際に改行を
    してみる`);

const str = "helloworld";
console.log(str.toUpperCase());

//tsconfig.json にて noImplicitAny: true を設定することで、TypeScriptが型をany型と推測した場合にエラーが発生するようになります。
function hello(name) {   //không định nghĩa gì được hiểu là kiểu any 
      console.log(`Hello, ${name.toUpperCase()}`);
    }
     
    hello("aa");