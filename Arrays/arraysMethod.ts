//forEach
const arr = ["a", "b", "c"];
arr.forEach((value) => {
    console.log(value);
})

//Map
const arr2 = arr.map((value) => {
    return value + value;
});
console.log(arr2); //[ 'aa', 'bb', 'cc' ]

//Không nên dùng for in