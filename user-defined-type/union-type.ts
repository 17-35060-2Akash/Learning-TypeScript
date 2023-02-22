export { };

let userId: string | boolean | any;

userId = 101;
userId = "101";

function dispalyUserInfo(userId: any) {
    console.log(userId);
}

dispalyUserInfo(101);