export { };

class User {
    userName: string;
    age: number;

    constructor(userName: string, age: number) {
        this.userName = userName;
        this.age = age;
    };

    display = (): void => {
        console.log(`User Name: ${this.userName} & Age: ${this.age}`);
    };
}
let user1 = new User('Akash', 23);
let user2 = new User('Heeme', 24);

user1.display();
user2.display();