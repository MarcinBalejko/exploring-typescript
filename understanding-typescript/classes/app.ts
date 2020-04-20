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

class Department {
  // private id: string
  // private name: string;
  private employees: string[] = [];

  // *readonly is like attr_reader in ruby
  // it ensures that this property does not get changed
  constructor(private readonly id: string, public name: string) {
    // this.id = id
    // this.name = n;
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}
