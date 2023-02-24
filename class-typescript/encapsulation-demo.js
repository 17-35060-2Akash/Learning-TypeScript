"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var User = /** @class */ (function () {
    function User(userName, age) {
        var _this = this;
        this.display = function () {
            console.log("User Name: ".concat(_this.userName, " & Age: ").concat(_this.age, " "));
        };
        this.userName = userName;
        this.age = age;
    }
    ;
    return User;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(userName, age, studentId) {
        var _this = _super.call(this, userName, age) || this;
        _this.display = function () {
            console.log("User Name: ".concat(_this.userName, " & Age: ").concat(_this.age, " & ID: ").concat(_this.studentId));
        };
        _this.setStudentId = function (studentId) {
            _this.studentId = studentId;
        };
        _this.getStudentId = function () {
            return _this.studentId;
        };
        _this.studentId = studentId;
        _this.cgpa = 3.80;
        return _this;
    }
    ;
    return Student;
}(User));
var student1 = new Student('Akash', 23, 110);
student1.setStudentId(100);
console.log(student1.getStudentId());
console.log(student1.cgpa);
var user1 = new User("Akash", 23);
user1.userName = 'Pinky';
// console.log(user1);
// user1.display();
