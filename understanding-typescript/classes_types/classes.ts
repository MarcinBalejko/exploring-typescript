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

abstract class Department {
  static fiscalYear = 2020;
  // private readonly id: string;
  // private name: string;
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
    // console.log(Department.fiscalYear);
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    // validation etc
    // this.id = 'd2';
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }

  describe() {
    console.log("IT Department - ID: " + this.id);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found.");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value!");
    }
    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  describe() {
    console.log("Accounting Department - ID: " + this.id);
  }

  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

const employee1 = Department.createEmployee("Max");
console.log(employee1, Department.fiscalYear);

const it = new ITDepartment("d1", ["Max"]);

it.addEmployee("Max");
it.addEmployee("Manu");

// it.employees[2] = 'Anna';

it.describe();
it.name = "NEW NAME";
it.printEmployeeInformation();

console.log(it);

const accounting = new AccountingDepartment("d2", []);

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
