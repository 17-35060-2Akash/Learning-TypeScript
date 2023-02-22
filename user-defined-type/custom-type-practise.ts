export { };

type User = {
    userName: string;
    userId: number;
    address?: string;
};

let users: User[] = [];

let user1: User = { userName: "Akash", userId: 111 };
let user2: User = { userName: 'Heeme', userId: 112 };

users.push(user1, user2);
// console.log(users);

//user defined custom type

type RequestType = ("GET" | "POST");
let getRequest: RequestType = "GET";
let postRequest: RequestType = "POST";

const requestHandler = (getRequest: RequestType, postRequest: RequestType = 'POST') => console.log(getRequest, postRequest);

requestHandler('GET');

