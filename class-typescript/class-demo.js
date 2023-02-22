"use strict";
exports.__esModule = true;
var User = /** @class */ (function () {
    function User(userName, age) {
        var _this = this;
        this.display = function () {
            console.log("User Name: ".concat(_this.userName, " & Age: ").concat(_this.age));
        };
        this.userName = userName;
        this.age = age;
    }
    ;
    return User;
}());
var user1 = new User('Akash', 23);
var user2 = new User('Heeme', 24);
user1.display();
user2.display();
