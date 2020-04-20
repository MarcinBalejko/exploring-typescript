// 1.) THIS
// class Department {
//   name: string;
//   private employees: string[] = [];
//   constructor(n: string) {
//     this.name = n;
//   }
//   describe(this: Department) {
//     console.log("Department: " + this.name);
//   }
//   addEmployee(employee: string) {
//     this.employees.push(employee);
//   }
//   printEmployeeInformation() {
//     console.log(this.employees.length);
//     console.log(this.employees);
//   }
// }
// const accounting = new Department("Accounting");
// accounting.addEmployee("Max");
// accounting.addEmployee("Manu");
// accounting.employees[2] = "Anna";
// we attached 'private' to employees above so that this way doesn't work
// it would still be executed in the js runtime though
// accounting.describe();
// accounting.printEmployeeInformation();
// 2.) SHORTHAND INITIALIZATION & READONLY
var Department = /** @class */ (function () {
    // *readonly is like attr_reader in ruby
    // it ensures that this property does not get changed
    function Department(id, name) {
        this.id = id;
        this.name = name;
        // private id: string
        // private name: string;
        this.employees = [];
        // this.id = id
        // this.name = n;
    }
    Department.prototype.describe = function () {
        console.log("Department (" + this.id + "): " + this.name);
    };
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.printEmployeeInformation = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    return Department;
}());
