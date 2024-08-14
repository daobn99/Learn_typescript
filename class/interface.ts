//interface giống với type aliases nhưng interface chỉ dùng được với object, không đặt riêng lẻ cho biến cụ thể
interface Rectangle {  //rectangle: hình chữ nhật
    height : number;
    width : number;
}
const rectangle: Rectangle = {
    width : 30,
    height : 10,
}

//interface có khả năng kế thừa
interface ColorRectangle extends Rectangle {
    color : string;
}
const redRectangle : ColorRectangle = {
    width : 100,
    height : 60,
    color : "red",
}