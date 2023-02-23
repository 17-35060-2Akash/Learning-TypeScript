var userInfo1;
var userInfo2;
userInfo1 = function (user) {
    console.log("".concat(user, " is 25 years old!"));
    return "ABC";
};
userInfo2 = function (user, age) {
    console.log("".concat(user, " is ").concat(age, " years old!"));
};
console.log(userInfo1("Akash"));
userInfo2("Akash", 25);
