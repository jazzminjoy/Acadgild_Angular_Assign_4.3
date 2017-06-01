# Acadgild_Angular_Assign_4.3
Create an abstract class and method, extend to subclass, access method from subclass, create instance, log output

Acadgild Front End Development Course, Assignment 4.3
Student: Michele Cannito
Topics: TypeScript Abstract Class, extending, accessing abstract method

This assignment deals with using an abstract class and method, and properly accessing the method from a sub class.

There are rules for accessing an abstract method in an abstract class.
(In examples, Dept is abstract class, and class Child extends Dept.)

1. Abstract class can not be instantated, such as with "new".
let pr = new Dept(); // error

2. Abstract methods can not be called directly.
Dept.abstractMethod(); // error

3. The child must implement the method.
child.abstractMethod(); // error if method not in child class

4. The Child class needs to have a constructor.
5. The Child class must access super() in its constructor.
6. The Child class cannot access super.abstractMethod();

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
