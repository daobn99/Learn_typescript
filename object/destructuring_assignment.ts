//オブジェクト分割代入は、オブジェクトからプロパティを取り出す便利な機能です。

const item = {price: 100, name: "pen"};
const price1 = item.price;

const {price} = item;
const {name} = item;
console.log(price);

//---------------------------
const color = { r: 0, g: 122, b: 204, a: 1 };
// const r = color.r;
// const g = color.g;
// const b = color.b;
// const a = color.a;

const {r, g, b: blue, a} = color;  //nhanh hơn là gọi từng phần tử một
console.log(g);  //122
console.log(blue); //204  : đặt tên property b là blue
/**điểm yếu của cách làm này là phải đặt tên giống với tên trong object, không đc đặt kiểu r1, g1,...
 * Để đặt tên cho property, có thể dùng dấu 「: + tên」 để đặt
*/
