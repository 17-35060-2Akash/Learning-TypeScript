//built in types
var id = [1, 2, 3];
var userId;
var firstName;
var lastName;
var fullName;
var isActivated;
userId = 101;
firstName = "Nasin Aynul ";
lastName = "Akash";
isActivated = true;
fullName = firstName.concat(lastName);
console.log(lastName.toUpperCase());
console.log("My full name is ".concat(fullName, ".\nMy id is ").concat(userId, ".\nMy Account is ").concat(isActivated ? "active" : 'inactive'));
function display() {
    console.log("Hi I'm display");
}
var display2 = function () {
    console.log("Hi I'm display 2");
};
display();
display2();
