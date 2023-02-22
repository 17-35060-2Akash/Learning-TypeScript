export { };
type User = { userName: string, id: number, address?: string };

let users: User[];
users = [];


let user1: User;
user1 = { userName: "Akash", id: 101 };
users.push(user1);

let user2: User;
user2 = { userName: "Batash", id: 102 };
users.push(user2);

let user3: User;
user3 = { userName: "Patash", id: 103 };
users.push(user3);

// console.log(users);

type RequestType = "GET" | "POST";

let getRequest: RequestType;
getRequest = "GET";


//functions 

function requestHandler(requestType: RequestType) {
    console.log(requestType);
}

requestHandler("GET");