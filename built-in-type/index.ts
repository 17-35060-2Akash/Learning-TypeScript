//built in types

let id = [1, 2, 3];
let userId: number;
let firstName: string;
let lastName: string;
let fullName: string;
let isActivated: boolean;

userId = 101;
firstName = "Nasin Aynul ";
lastName = "Akash"
isActivated = true;

fullName = firstName.concat(lastName);
console.log(lastName.toUpperCase());

console.log(`My full name is ${fullName}.
My id is ${userId}.
My Account is ${isActivated ? "active" : 'inactive'}`);

function display(): void {
    console.log(`Hi I'm display`);
}

const display2 = () => {
    console.log(`Hi I'm display 2`);
}

display();
display2();