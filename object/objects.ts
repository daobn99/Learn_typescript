//インラインの型注釈
const box: { width: number; height: number, calc_S(a: number, b: number): number } = {     //có thể dùng dấu , để ngăn cách khi khai báo kiểu dữ liệu, nhưng khuyến cáo dùng ;
    width: 100,
    height: 50,
    calc_S: (a, b) => a * b,
};

//インラインの型注釈の代わりに、型エイリアスを使った型注釈の書き方もできます。
type Box = { width: number; height: number; calc_S(a: number, b: number): number };
const box1: Box = {
    width: 1030,
    height: 2230,
    calc_S: (a, b) => a * b,
};

//định nghĩa object bằng utility Record
//công thức của record là : Record<type of key, type of value>

let foo: Record<string, number>;
foo = { a: 100, b: 200 };
console.log(foo.a);  //ouput : 100

//dòng dưới đc hiểu : tạo một cái object "foo1" có kiểu dữ liệu của phần key là number và kiểu dữ liệu của phần value cũng là number
const foo1: Record<number, number> = { 0: 100, 1: 200 };
console.log(foo1['0']);  //output: 100