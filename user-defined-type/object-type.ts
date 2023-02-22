/* let user1: {
    userName: string,
    userId: number,
}

user1 = {
    userName: "Akash",
    userId: 101
};

console.log(user1); */

//another approach

/* let users: object;
users = {
    name: "Heeme",
    id: 1325,
} */

////

/* let users1: object[];

users1 = [
    { name: "Fahim" },
    { name: "Rakib" },
] */


// Making a key or field optional of an object

let users: object[];
users = [];

let user1: {
    userName: string,
    id: number,
    address?: string,
};

user1 = {
    userName: "Akash",
    id: 101,
};

let user2: {
    userName: string,
    id: number,
    address?: string,
};


user2 = {
    userName: "Batash",
    id: 102,
};

users.push(user1, user2);
// console.log(users);\


for (const key in users) {
    console.log(users[key]);
}
