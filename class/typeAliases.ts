
// type StringOrNumber = string | number;
// const a: StringOrNumber = 123;
// const b: StringOrNumber = "dao";
// console.log(a);

type Admin = {
    name: string;
    privileges: string[];
}

type Employee = {
    name: string;
    startDate: Date;
}

type ManagerEmploee = Admin & Employee;

const e1: ManagerEmploee = {
    name: 'ManagerCat',
    privileges: ['create-server', 'mentor'],
    startDate: new Date(), //現在日時を生成
}
console.log(e1.privileges[0]);


type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable & Numeric; // 交差部分がnumberのみであるので number型になる 
const x: Universal = 123
console.log(x);


