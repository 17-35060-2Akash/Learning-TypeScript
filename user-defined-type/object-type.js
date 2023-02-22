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
var users;
users = [];
var user1;
user1 = {
    userName: "Akash",
    id: 101
};
var user2;
user2 = {
    userName: "Batash",
    id: 102
};
users.push(user1, user2);
// console.log(users);\
for (var key in users) {
    console.log(users[key]);
}
