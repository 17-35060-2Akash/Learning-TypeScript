// let userNames: string[];
// let userIds:number[];

let userNames: Array<string>;

userNames = ['Akash', 'Fahim', "Rakib"];
console.log(userNames[1]);

const multipleTypeArray: Array<string | number> = ['Akash', 'Fahim', "Rakib", 1];
const multipleTypeArray1: (string | number)[] = ['Akash', 'Fahim', "Rakib", 1];

console.log(userNames.sort());