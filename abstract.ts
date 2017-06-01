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

// *------------------------------------------------------------
abstract class Department {
    public name: string;
    constructor(name: string) {
        this.name = name;
    }
    // This method is not an abstract one and can be called directly. 
    // It is optional to include it in sub classes.
    printName(): void {
        return( `Department: ${ this.name }` )
    }
    // Each subclass must implement this abstract method.
    // Abstract methods cannot be called directly.
    abstract printMeeting(): void {  
    };   

//*------------------------------------------------------------
class HumanResourcesDepartment extends Department {
    // Constructor in child class must call super()
    constructor(name: string = "Human Resources") {
        super(name);
        this.name = name; 
    }
    // The base abstract method must be included in the sub class
    printMeeting(): void {
        return( `The ${ this.name } Department meets at 9:30 each Tuesday.` )
    }
}

//*------------------------------------------------------------
class PayrollDepartment extends Department {
    // Constructor in child class must call super()
    constructor(name: string = "Payroll") {
        super(name);
        this.name = name; 
    }
    // The base abstract method must be included in the sub class
    printMeeting(): void {
        return( `The ${ this.name } Department meets every Friday at 10.` )
    }
}

//*------------------------------------------------------------
class PRDepartment extends Department {
    // Constructor in child class must call super()
    constructor(name: string = "Public Relations") {
        super(name);
        this.name = name; 
    }
    // The base abstract method must be included in the sub class
    printMeeting(): void {
        return( `The ${ this.name } Department meets at 3 each Wednesday.` )
    }
}

//*------------------------------------------------------------
class LegalDepartment extends Department {
    // Constructor in child class must call super()
    constructor(name: string = "Legal") {
        super(name);
        this.name = name; 
    }
    // The base abstract method must be included in the sub class
    printMeeting(): void {
        return( `The ${ this.name } Department meets at 11 AM every Monday.` )
    }
}

//*------------------------------------------------------------

// Create instances and show output for each sub class
let hr = new HumanResourcesDepartment();
console.log( hr.printName() );
console.log( hr.printMeeting() );
console.log(" ");
let payroll = new PayrollDepartment();
console.log( payroll.printName() );
console.log( payroll.printMeeting() );
console.log(" ");
let pr = new PRDepartment();
console.log( pr.printName() );
console.log( pr.printMeeting() );
console.log(" ");
let legal = new LegalDepartment();
console.log( legal.printName() );
console.log( legal.printMeeting() );
console.log(" ");