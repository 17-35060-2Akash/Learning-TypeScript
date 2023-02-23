"use strict";
exports.__esModule = true;
var inheritance_demo_1 = require("../class-typescript/inheritance-demo");
function displayInfo() {
    // console.log(`${student.studentName} : ${student.studentAge}`);
    var user1 = new inheritance_demo_1.User('Akash', 25);
    user1.display();
}
;
displayInfo();
