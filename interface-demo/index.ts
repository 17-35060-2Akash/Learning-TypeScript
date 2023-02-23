export { };
/*

let users: {
    id: number,
    name: string,
    age: number
}[] = [];

let user1: {
    id: number,
    name: string,
    age: number
} = {
    id: 1,
    name: "Akash",
    age: 25,

}

let user2: {
    id: number,
    name: string,
    age: number
} = {
    id: 1,
    name: "Mr, Potatoes",
    age: 25,

}

users.push(user1, user2);

const printUsers = (user: { id: number, name: string, age: number }) => {
    console.log(`userid = ${user.id}, name = ${user.name}, age = ${user.age}`);
}

users.forEach(user => printUsers(user)); */

interface IUser {
    id: number,
    name: string,
    age: number
}

let users: IUser[] = [];

let user1: IUser = {
    id: 1,
    name: "Akash",
    age: 25,

}

let user2: IUser = {
    id: 1,
    name: "Mr, Potatoes",
    age: 25,

}

users.push(user1, user2);

const printUsers = (user: { id: number, name: string, age: number }) => {
    console.log(`userid = ${user.id}, name = ${user.name}, age = ${user.age}`);
}

users.forEach(user => printUsers(user));