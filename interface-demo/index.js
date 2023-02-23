"use strict";
exports.__esModule = true;
var users = [];
var user1 = {
    id: 1,
    name: "Akash",
    age: 25
};
var user2 = {
    id: 1,
    name: "Mr, Potatoes",
    age: 25
};
users.push(user1, user2);
var printUsers = function (user) {
    console.log("userid = ".concat(user.id, ", name = ").concat(user.name, ", age = ").concat(user.age));
};
users.forEach(function (user) { return printUsers(user); });
