//có 2 cách đặt kiểu chú thích cho array. 2 cách viết tác dụng như nhau, tùy thằng code thích kiểu nào thì viết

//C1:
const array: number[] = [1, 2, 3, 4];
//C2:
const $array1: Array<number> = [1, 2, 3, 4];

const arr = [1, 2, 3];
const arr1 = [0, ...arr, 4];
console.log(arr1);  //0 1 2 3 4

//copy array
const backup = [...arr];
arr.push(4);
console.log(arr);  //1 2 3 4
console.log("arr back up is" + backup); //1 2 3 (không bị ảnh hưởng sau khi push)

const arr2 = [4, 5, 6];
const concated = [...arr, ...arr2];
console.log(concated);  //1 2 3 4 4 5 6

for (let a of array) {
    
}