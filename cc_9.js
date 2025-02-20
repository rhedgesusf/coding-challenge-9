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
        return this.salary * 12 * .1;
    }
    calculateAnnualSalary() {
        return super.calculateAnnualSalary() + this.calculateBonus();
    }
}

const mgr1 = new Manager("John Smith", 201, "IT", 8000, 5);
console.log(mgr1.getDetails());

console.log(mgr1.calculateBonus());

//////////////////////////////////////
// Task 3: Creating a Company Class //
//////////////////////////////////////

console.log("--------------------------------------");
console.log("Task 3: Creating a Company Class");

class Company {
    name;
    employees = [];

    constructor(name){
        this.name = name;
    }

    addEmployee(employee) {
        this.employees.push(employee);
    }
    listEmployees(){
        this.employees.forEach(employee => console.log(employee.getDetails()));
    }
    calculateTotalPayroll(){
        return this.employees.reduce((sum, employee) => sum + employee.calculateAnnualSalary(), 0);
    }
    promoteToManager(employee, teamSize) {
        let newManager = new Manager(employee.name, employee.id, employee.department, employee.salary, teamSize);
        let index = this.employees.findIndex((element) => element.id === employee.id);
        if (index != -1) {
            this.employees[index] = newManager;
        }
    }
} 

const company = new Company("TechCorp");

company.addEmployee(emp1);
company.addEmployee(mgr1);
company.listEmployees();

///////////////////////////////////////////
// Task 4: Implementing a Payroll System //
///////////////////////////////////////////

console.log("--------------------------------------");
console.log("Task 4: Implementing a Payroll System");

// Added calculateTotalPayroll() to Company class

console.log(company.calculateTotalPayroll());

/////////////////////////////////////
// Task 5: Implementing Promotions //
/////////////////////////////////////

console.log("--------------------------------------");
console.log("Task 5: Implementing Promotions");

company.promoteToManager(emp1, 3);
company.listEmployees();