/*
Acadgild Front End Development Course, Assignment 4.3
Student: Michele Cannito
Topics: TypeScript Abstract Class, extending, accessing abstract method

Assignment (quoted from Acadgild):
"Create an abstract class Department with one abstract method:
    abstract class Department {
    Public name: string;
    constructor (name) {}
    printName(): void { console dept name with appropriate message }
    abstract printMeeting(): void;
    }
  Now extend this abstract class using AccountingDepartment:
    class AccountingDepartment extends Department {
        //Use department class property and methods here
    }
  Again create 2 more classes for different department and extend
  department class. And then create instance for all and show output
  using console."
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// *------------------------------------------------------------
var Department = (function () {
    function Department(name) {
        this.name = name;
    }
    // This method is not an abstract one and can be called directly. 
    // It is optional to include it in sub classes.
    Department.prototype.printName = function () {
        return ("Department: " + this.name);
    };
    // Each subclass must implement this abstract method.
    // Abstract methods cannot be called directly.
    Department.prototype.printMeeting = function () {
    };
    ;
    return Department;
}());
//*------------------------------------------------------------
var HumanResourcesDepartment = (function (_super) {
    __extends(HumanResourcesDepartment, _super);
    // Constructor in child class must call super()
    function HumanResourcesDepartment(name) {
        if (name === void 0) { name = "Human Resources"; }
        var _this = _super.call(this, name) || this;
        _this.name = name;
        return _this;
    }
    // The base abstract method must be included in the sub class
    HumanResourcesDepartment.prototype.printMeeting = function () {
        return ("The " + this.name + " Department meets at 9:30 each Tuesday.");
    };
    return HumanResourcesDepartment;
}(Department));
//*------------------------------------------------------------
var PayrollDepartment = (function (_super) {
    __extends(PayrollDepartment, _super);
    // Constructor in child class must call super()
    function PayrollDepartment(name) {
        if (name === void 0) { name = "Payroll"; }
        var _this = _super.call(this, name) || this;
        _this.name = name;
        return _this;
    }
    // The base abstract method must be included in the sub class
    PayrollDepartment.prototype.printMeeting = function () {
        return ("The " + this.name + " Department meets every Friday at 10.");
    };
    return PayrollDepartment;
}(Department));
//*------------------------------------------------------------
var PRDepartment = (function (_super) {
    __extends(PRDepartment, _super);
    // Constructor in child class must call super()
    function PRDepartment(name) {
        if (name === void 0) { name = "Public Relations"; }
        var _this = _super.call(this, name) || this;
        _this.name = name;
        return _this;
    }
    // The base abstract method must be included in the sub class
    PRDepartment.prototype.printMeeting = function () {
        return ("The " + this.name + " Department meets at 3 each Wednesday.");
    };
    return PRDepartment;
}(Department));
//*------------------------------------------------------------
var LegalDepartment = (function (_super) {
    __extends(LegalDepartment, _super);
    // Constructor in child class must call super()
    function LegalDepartment(name) {
        if (name === void 0) { name = "Legal"; }
        var _this = _super.call(this, name) || this;
        _this.name = name;
        return _this;
    }
    // The base abstract method must be included in the sub class
    LegalDepartment.prototype.printMeeting = function () {
        return ("The " + this.name + " Department meets at 11 AM every Monday.");
    };
    return LegalDepartment;
}(Department));
//*------------------------------------------------------------
// Create instances and show output for each sub class
var hr = new HumanResourcesDepartment();
console.log(hr.printName());
console.log(hr.printMeeting());
console.log(" ");
var payroll = new PayrollDepartment();
console.log(payroll.printName());
console.log(payroll.printMeeting());
console.log(" ");
var pr = new PRDepartment();
console.log(pr.printName());
console.log(pr.printMeeting());
console.log(" ");
var legal = new LegalDepartment();
console.log(legal.printName());
console.log(legal.printMeeting());
console.log(" ");

