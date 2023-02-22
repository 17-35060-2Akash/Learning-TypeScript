"use strict";
exports.__esModule = true;
var users = [];
var user1 = { userName: "Akash", userId: 111 };
var user2 = { userName: 'Heeme', userId: 112 };
users.push(user1, user2);
var getRequest = "GET";
var postRequest = "POST";
var requestHandler = function (getRequest, postRequest) {
    if (postRequest === void 0) { postRequest = 'POST'; }
    return console.log(getRequest, postRequest);
};
requestHandler('GET');
