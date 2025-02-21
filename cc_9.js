////////////////////////////////////////
// Task 1: Creating an Employee Class //
////////////////////////////////////////

console.log("--------------------------------------");
console.log("Task 1: Creating an Employee Class");

class Employee{
    constructor(name, id, department, salary) {
        this.name = name
        this.id = id
        this.department = department
        this.salary = salary
    }

    // return string of Employee details
    getDetails() {
        return `Employee: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: ${this.salary}`;
    }

    // return annual salary by converting monthly salary to yearly
    calculateAnnualSalary() {
        return this.salary * 12;
    }
}

const emp1 = new Employee("Alice Johnson", 101, "Sales", 5000);
console.log(emp1.getDetails());            // Expected output: "Employee: Alice Johnson, ID: 101, Department: Sales, Salary: $5000"

console.log(emp1.calculateAnnualSalary()); // Expected output: 60000

//////////////////////////////////////
// Task 2: Creating a Manager Class //
//////////////////////////////////////

console.log("--------------------------------------");
console.log("Task 2: Creating a Manager Class");

class Manager extends Employee {
    constructor(name, id, department, salary, teamSize) {
        super(name, id, department, salary);
        this.teamSize = teamSize;
    }

    // return string of details for a Manager
    getDetails() {
        return `Manager: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: ${this.salary}, Team Size: ${this.teamSize}`;
    }

    // return bonus amount for manager which is 10% of yearly salary
    calculateBonus() {
        return this.salary * 12 * .1;
    }

    // return manager annual salaray which is base amount plus bonus
    calculateAnnualSalary() {
        return super.calculateAnnualSalary() + this.calculateBonus();
    }
}

const mgr1 = new Manager("John Smith", 201, "IT", 8000, 5);
console.log(mgr1.getDetails());        // Expected output: "Manager: John Smith, ID: 201, Department: IT, Salary: $8000, Team Size: 5"

console.log(mgr1.calculateBonus());    // Expected output: 9600

//////////////////////////////////////
// Task 3: Creating a Company Class //
//////////////////////////////////////

console.log("--------------------------------------");
console.log("Task 3: Creating a Company Class");

class Company {
    employees = [];

    constructor(name){
        this.name = name;
    }

    // add an Employee to the employees array
    addEmployee(employee) {
        this.employees.push(employee);
    }

    // print out details of all employees in the employee array
    listEmployees(){
        this.employees.forEach(employee => console.log(employee.getDetails()));
    }

    // calculate total salary of all employees in the employee array
    calculateTotalPayroll(){
        return this.employees.reduce((sum, employee) => sum + employee.calculateAnnualSalary(), 0);
    }

    // promote specified employee to a manager; make sure to update the employees array with new details
    promoteToManager(employee, teamSize) {
        // create a new manager by promoting the employee
        let newManager = new Manager(employee.name, employee.id, employee.department, employee.salary, teamSize);

        // find the index of the employee in the employee list and update with new manager details
        let index = this.employees.findIndex((element) => element.id === employee.id);
        if (index != -1) {
            this.employees[index] = newManager;
        }
    }
} 

const company = new Company("TechCorp");

company.addEmployee(emp1);
company.addEmployee(mgr1);

// Expected output:
// "Employee: Alice Johnson, ID: 101, Department: Sales, Salary: $5000"
// "Manager: John Smith, ID: 201, Department: IT, Salary: $8000, Team Size: 5"
company.listEmployees();

///////////////////////////////////////////
// Task 4: Implementing a Payroll System //
///////////////////////////////////////////

console.log("--------------------------------------");
console.log("Task 4: Implementing a Payroll System");

// Added calculateTotalPayroll() to Company class

console.log(`Total Payroll $${company.calculateTotalPayroll()}`);    // Expected output: 165600 (assuming emp1 and mgr1 salaries)

/////////////////////////////////////
// Task 5: Implementing Promotions //
/////////////////////////////////////

console.log("--------------------------------------");
console.log("Task 5: Implementing Promotions");

company.promoteToManager(emp1, 3);

// Expected output:
// "Manager: Alice Johnson, ID: 101, Department: Sales, Salary: $5000, Team Size: 3"
// "Manager: John Smith, ID: 201, Department: IT, Salary: 8000, Team Size: 5"
company.listEmployees();              