import inquirer from "inquirer";
import chalk from "chalk";
class Student {
    name;
    constructor(name) {
        this.name = name;
    }
}
class Person {
    students = [];
    addStudent(obj) {
        this.students.push(obj);
    }
}
const persons = new Person();
const programStart = async (persons) => {
    do {
        console.log(chalk.magenta("*".repeat(18)));
        console.log(chalk.bgGreen.magenta("**** Welcome **** "));
        console.log(chalk.magenta("*".repeat(18)));
        const ans = await inquirer.prompt([
            {
                name: "select",
                type: "list",
                message: chalk.blue.bold("Please Select Option ..."),
                choices: ["staff", "student", "exit"],
            },
        ]);
        if (ans.select == "staff") {
            console.log(chalk.green.bold.italic("you approach the staff room,and feel free to ask any questions"));
        }
        else if (ans.select == "student") {
            const answers = await inquirer.prompt([
                {
                    name: "student",
                    type: "input",
                    message: chalk.magenta("Enter the student name you want to select "),
                },
            ]);
            const student = persons.students.find((val) => val.name == answers.student);
            if (!student) {
                const name = new Student(answers.student);
                persons.addStudent(name);
                console.log(chalk.green.bold(`Hello I am ${name.name}, Nice to Meet you!`));
                console.log(chalk.magenta.bold("Student added successfully"));
                console.log(chalk.red.bold("Current students List"));
                console.log(persons.students);
            }
            if (student) {
                console.log(chalk.green.bold.italic(`Hello I am ${student.name}, I am Fine!......`));
                console.log(chalk.blue(persons.students));
            }
        }
        else if (ans.select == "exit") {
            console.log(chalk.magenta("*".repeat(28)));
            console.log(chalk.green.bgGray.blue("Thank you for visiting Us !"));
            console.log("\n");
            console.log(chalk.magenta("*".repeat(28)));
        }
    } while (true);
};
programStart(persons);
