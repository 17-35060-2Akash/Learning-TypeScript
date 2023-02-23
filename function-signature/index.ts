let userInfo1: (user: string) => string;
let userInfo2: (user: string, age: number) => void;

userInfo1 = (user) => {
    console.log(`${user} is 25 years old!`);
    return "ABC";
};

userInfo2 = (user, age) => {
    console.log(`${user} is ${age} years old!`);
};

console.log(userInfo1("Akash"));

userInfo2("Akash", 25)