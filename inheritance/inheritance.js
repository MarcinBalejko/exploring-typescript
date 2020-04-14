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
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
        // console.log(`Person Created: ${this.name}`);
    }
    Person.prototype.sayHello = function () {
        console.log(this.name + " says hello");
    };
    Person.prototype.payBalance = function () {
        console.log("Customer " + this.id + " has paid their balance");
    };
    return Person;
}());
var Customer = /** @class */ (function (_super) {
    __extends(Customer, _super);
    function Customer(id, name) {
        var _this = _super.call(this, name) || this;
        _this.id = id;
        return _this;
        // console.log(`Customer Created: ${this.name}`);
    }
    Customer.prototype.payBalance = function () {
        _super.prototype.payBalance.call(this);
    };
    return Customer;
}(Person));
// let jose = new Person("Jose");
var mary = new Customer(1, "Mary");
// mary.sayHello();
mary.payBalance();
