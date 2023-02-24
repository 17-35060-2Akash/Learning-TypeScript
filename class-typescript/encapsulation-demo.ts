export { };

class User {
    public userName: string;
    public age: number;

    constructor(userName: string, age: number) {
        this.userName = userName;
        this.age = age;
    };

    display = (): void => {
        console.log(`User Name: ${this.userName} & Age: ${this.age} `);

    };
}

class Student extends User {
    private studentId: number;
    readonly cgpa: number;

    constructor(userName: string, age: number, studentId: number) {
        super(userName, age);
        this.studentId = studentId;
        this.cgpa = 3.80;
    };

    display = (): void => {
        console.log(`User Name: ${this.userName} & Age: ${this.age} & ID: ${this.studentId}`);
    };

    setStudentId = (studentId: number): void => {
        this.studentId = studentId;
    };

    getStudentId = () => {
        return this.studentId;
    }
}

let student1 = new Student('Akash', 23, 110);
student1.setStudentId(100);
console.log(student1.getStudentId());
console.log(student1.cgpa);

let user1 = new User("Akash", 23);

user1.userName = 'Pinky';
// console.log(user1);
// user1.display();


