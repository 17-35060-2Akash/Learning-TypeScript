// let userNames: string[];
// let userIds:number[];

let userNames: Array<string>;

userNames = ['Akash', 'Fahim', "Rakib"];
// console.log(userNames[1]);

const multipleTypeArray: Array<string | number> = ['Akash', 'Fahim', "Rakib", 1];
const multipleTypeArray1: (string | number)[] = ['Akash', 'Fahim', "Rakib", 1];

userNames.sort()
console.log(userNames);

userNames.push('Heeme');
console.log(userNames);

userNames.pop();
userNames.unshift("milton");
console.log(userNames);

userNames.shift();
userNames.shift();
console.log(userNames);