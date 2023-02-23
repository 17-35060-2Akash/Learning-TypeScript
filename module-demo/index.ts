// import { studentAge as age, studentName as name } from "./student";
import * as student from './student';
import { User } from '../class-typescript/inheritance-demo';

function displayInfo(): void {
    // console.log(`${student.studentName} : ${student.studentAge}`);
    let user1 = new User('Akash', 25);
    user1.display();
};

displayInfo();