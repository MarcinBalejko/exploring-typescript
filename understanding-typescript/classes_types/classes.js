// 1.) THIS
// class Department {
//   name: string;
//   private employees: string[] = [];
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
// class Department {
//   // private id: string
//   // private name: string;
//   private employees: string[] = [];
//   // *readonly is like attr_reader in ruby
//   // it ensures that this property does not get changed
//   constructor(private readonly id: string, public name: string) {
//     // this.id = id
//     // this.name = n;
//   }
//   describe(this: Department) {
//     console.log(`Department (${this.id}): ${this.name}`);
//   }
//   addEmployee(employee: string) {
//     this.employees.push(employee);
//   }
//   printEmployeeInformation() {
//     console.log(this.employees.length);
//     console.log(this.employees);
//   }
// }
// 3.) INHERITANCE
// class Department {
//   private employees: string[] = [];
//   constructor(private readonly id: string, public name: string) {}
//   describe(this: Department) {
//     console.log(`Department (${this.id}): ${this.name}`);
//   }
//   addEmployee(employee: string) {
//     this.employees.push(employee);
//   }
//   printEmployeeInformation() {
//     console.log(this.employees.length);
//     console.log(this.employees);
//   }
// }
// class ITDepartment extends Department {
//   admins: string[];
//   constructor(id: string, admins: string[]) {
//     super(id, "IT"); // super always goes first
//     this.admins = admins;
//   }
// }
// class AccountingDepartment extends Department {
//   constructor(id: string, private reports: string[]) {
//     super(id, "Accounting");
//   }
//   addReport(text: string) {
//     this.reports.push(text);
//   }
//   printReports() {
//     console.log(this.reports);
//   }
// }
// const it = new ITDepartment("d1", ["Max"]);
// it.addEmployee("Max");
// it.addEmployee("Manu");
// it.describe();
// it.name = "NEW NAME";
// it.printEmployeeInformation();
// console.log(it);
// const accounting = new AccountingDepartment("d2", []);
// accounting.addReport("Something went wrong...");
// accounting.printReports();
// 4.) GETTERS & SETTERS
// class Department {
//   // private readonly id: string;
//   // private name: string;
//   protected employees: string[] = [];
//   constructor(private readonly id: string, public name: string) {
//     // this.id = id;
//     // this.name = n;
//   }
//   describe(this: Department) {
//     console.log(`Department (${this.id}): ${this.name}`);
//   }
//   addEmployee(employee: string) {
//     // validation etc
//     // this.id = 'd2';
//     this.employees.push(employee);
//   }
//   printEmployeeInformation() {
//     console.log(this.employees.length);
//     console.log(this.employees);
//   }
// }
// class ITDepartment extends Department {
//   admins: string[];
//   constructor(id: string, admins: string[]) {
//     super(id, "IT");
//     this.admins = admins;
//   }
// }
// class AccountingDepartment extends Department {
//   private lastReport: string;
//   get mostRecentReport() {
//     if (this.lastReport) {
//       return this.lastReport;
//     }
//     throw new Error("No report found.");
//   }
//   set mostRecentReport(value: string) {
//     if (!value) {
//       throw new Error("Please pass in a valid value!");
//     }
//     this.addReport(value);
//   }
//   constructor(id: string, private reports: string[]) {
//     super(id, "Accounting");
//     this.lastReport = reports[0];
//   }
//   addEmployee(name: string) {
//     if (name === "Max") {
//       return;
//     }
//     this.employees.push(name);
//   }
//   addReport(text: string) {
//     this.reports.push(text);
//     this.lastReport = text;
//   }
//   printReports() {
//     console.log(this.reports);
//   }
// }
// const it = new ITDepartment("d1", ["Max"]);
// it.addEmployee("Max");
// it.addEmployee("Manu");
// // it.employees[2] = 'Anna';
// it.describe();
// it.name = "NEW NAME";
// it.printEmployeeInformation();
// console.log(it);
// const accounting = new AccountingDepartment("d2", []);
// accounting.mostRecentReport = "Year End Report";
// accounting.addReport("Something went wrong...");
// console.log(accounting.mostRecentReport);
// accounting.addEmployee("Max");
// accounting.addEmployee("Manu");
// accounting.printReports();
// accounting.printEmployeeInformation();
// // const accountingCopy = { name: 'DUMMY', describe: accounting.describe };
// // accountingCopy.describe();
// 5.)
var Department = /** @class */ (function () {
    function Department(id, name) {
        this.id = id;
        this.name = name;
        // private readonly id: string;
        // private name: string;
        this.employees = [];
        // this.id = id;
        // this.name = n;
        // console.log(Department.fiscalYear);
    }
    Department.createEmployee = function (name) {
        return { name: name };
    };
    Department.prototype.addEmployee = function (employee) {
        // validation etc
        // this.id = 'd2';
        this.employees.push(employee);
    };
    Department.prototype.printEmployeeInformation = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    Department.fiscalYear = 2020;
    return Department;
}());
var ITDepartment = /** @class */ (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment(id, admins) {
        var _this = _super.call(this, id, "IT") || this;
        _this.admins = admins;
        return _this;
    }
    ITDepartment.prototype.describe = function () {
        console.log("IT Department - ID: " + this.id);
    };
    return ITDepartment;
}(Department));
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment(id, reports) {
        var _this = _super.call(this, id, "Accounting") || this;
        _this.reports = reports;
        _this.lastReport = reports[0];
        return _this;
    }
    Object.defineProperty(AccountingDepartment.prototype, "mostRecentReport", {
        get: function () {
            if (this.lastReport) {
                return this.lastReport;
            }
            throw new Error("No report found.");
        },
        set: function (value) {
            if (!value) {
                throw new Error("Please pass in a valid value!");
            }
            this.addReport(value);
        },
        enumerable: true,
        configurable: true
    });
    AccountingDepartment.prototype.describe = function () {
        console.log("Accounting Department - ID: " + this.id);
    };
    AccountingDepartment.prototype.addEmployee = function (name) {
        if (name === "Max") {
            return;
        }
        this.employees.push(name);
    };
    AccountingDepartment.prototype.addReport = function (text) {
        this.reports.push(text);
        this.lastReport = text;
    };
    AccountingDepartment.prototype.printReports = function () {
        console.log(this.reports);
    };
    return AccountingDepartment;
}(Department));
var employee1 = Department.createEmployee("Max");
console.log(employee1, Department.fiscalYear);
var it = new ITDepartment("d1", ["Max"]);
it.addEmployee("Max");
it.addEmployee("Manu");
// it.employees[2] = 'Anna';
it.describe();
it.name = "NEW NAME";
it.printEmployeeInformation();
console.log(it);
var accounting = new AccountingDepartment("d2", []);
accounting.mostRecentReport = "Year End Report";
accounting.addReport("Something went wrong...");
console.log(accounting.mostRecentReport);
accounting.addEmployee("Max");
accounting.addEmployee("Manu");
// accounting.printReports();
// accounting.printEmployeeInformation();
accounting.describe();
// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };
// accountingCopy.describe();
