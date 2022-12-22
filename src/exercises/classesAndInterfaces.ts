/*
• Define a class called Logger that takes the name of a file in its constructor and provides
a method for writing messages to that file. Don’t worry about the actual file I/O
operations. Just define the class with the right members.
*/
class logger {
    constructor(public logFile: string) {}

    log(message: string) {
        console.log(message)
    }
}

//• Given the Person class below, create a getter for getting the full name of a person.
class Person {
    constructor(public firstName: string, public lastName: string) {}

    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}
// • Create a new class called Employee that extends Person and adds a new property called salary.
class EmployeeE extends Person {
    constructor(public salary: number, firstName: string, lastName: string) {
        super(firstName, lastName)
    }
}
// • What is the difference between private and protected members?
// NOTE Private members are not inherited by child classes.

// • Given the data below, define an interface for representing employees:
interface Address {
    street: string
    city: string
    zipCode: number
}
interface Employees {
    name: string
    salary: number
    address: Address
}
