"use strict";
exports.__esModule = true;
var users;
users = [];
var user1;
user1 = { userName: "Akash", id: 101 };
users.push(user1);
var user2;
user2 = { userName: "Batash", id: 102 };
users.push(user2);
var user3;
user3 = { userName: "Patash", id: 103 };
users.push(user3);
var getRequest;
getRequest = "GET";
//functions 
function requestHandler(requestType) {
    console.log(requestType);
}
requestHandler("GET");
