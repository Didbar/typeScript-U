class Account {
    nickname?: string

    constructor(public readonly id: number, public owner: string, private _balance: number) {}

    deposit(amount: number): void {
        if (amount <= 0) {
            throw new Error('Invalid Amount')
        }
        this._balance += amount
    }

    get balance(): number {
        return this._balance
    }
}
class SeatAssignment {
    //NOTE: index signatures
    [seatNumber: string]: string
}
class Ride {
    private static _activeRides: number = 0

    start() {
        Ride._activeRides++
    }
    stop() {
        Ride._activeRides--
    }

    static get activeRides(): number {
        return Ride._activeRides
    }
}
class Person {
    constructor(public firstName: string, public lastName: string) {}

    get fullName() {
        return this.firstName + ' ' + this.lastName
    }

    walk() {
        console.log('walking')
    }
}

class Student extends Person {
    constructor(public studentId: number, firstName: string, lastName: string) {
        super(firstName, lastName)
    }

    takeTest() {
        console.log('Taking a Test')
    }
}
// //General Class
// let account = new Account(1, 'David', 0)
// account.deposit(10)
// console.log(account instanceof Account)
// console.log(account.balance)

// //Index signatures
// let seats = new SeatAssignment()
// seats.A1 = 'Kolia'
// seats.A2 = 'David'
// seats['Something fancy'] = 'some text'
// console.log(seats)

// //Static properties
// let ride1 = new Ride()
// ride1.start()
// let ride2 = new Ride()
// ride2.start()
// console.log(Ride.activeRides)

//Inheritance
let student = new Student(1, 'John', 'Snow')
console.log(student.fullName)
student.walk()
student.takeTest()
