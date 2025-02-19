////////////////////////////////////////
// Task 1: Creating an Employee Class //
////////////////////////////////////////

console.log("--------------------------------------");
console.log("Task 1: Creating an Employee Class");

class Employee{
    name;
    id;
    department;
    salary;

    constructor(name, id, department, salary) {
        this.name = name
        this.id = id
        this.department = department
        this.salary = salary
    }

    getDetails() {
        return `Employee: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: ${this.salary}`;
    }

    calculateAnnualSalary() {
        return this.salary * 12;
    }
}

const emp1 = new Employee("Alice Johnson", 101, "Sales", 5000);
console.log(emp1.getDetails()); // Expected output: "Employee: Alice Johnson, ID: 101, Department: Sales, Salary: $5000"

console.log(emp1.calculateAnnualSalary()); // Expected output: 60000

//////////////////////////////////////
// Task 2: Creating a Manager Class //
//////////////////////////////////////

console.log("--------------------------------------");
console.log("Task 2: Creating a Manager Class");

class Manager extends Employee {
    teamSize = 0;

    constructor(name, id, department, salary, teamSize) {
        super(name, id, department, salary);
        this.teamSize = teamSize;
    }
    getDetails() {
        return `Manager: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: ${this.salary}, Team Size: ${this.teamSize}`;
    }
    calculateBonus() {
        return this.salary * .1;
    }
}

const mgr1 = new Manager("John Smith", 201, "IT", 8000, 5);
console.log(mgr1.getDetails());

console.log(mgr1.calculateBonus()); // Coding Challenge #9 instructions document are wrong, it says the expected output should be 9600 but even if you add the 10% bonus to 8000 that is only 8800.


