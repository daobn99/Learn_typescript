/**
 * Định nghĩa kiểu dữ liệu cho tất cả các property mà chỉ cần viết 1 lần
 * VD dưới định nghĩa tất cả các property là string, đỡ phải viết 
 * {desk: string, phone: string, glass: string, bag: string}
 */
type ItemsType = {
    [key: string]: string;
};

const items: ItemsType = {
    desk: "wooden",
    phone: "plastic",
    glasses: "metal",
    bag: "leather",
};
console.log(items.desk); //wooden
console.log(items["phone"]);
//--------------------------------------------

interface UserAttributes {
    [key: string]: string | number; //định nghĩa đc nhiều kiểu
};
const user: UserAttributes = {
    name: "Kazuya",
    age: 21,
    occupation: "WebEngineer",
};