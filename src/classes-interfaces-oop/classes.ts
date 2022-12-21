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
class Teacher extends Person {
    override get fullName() {
        return 'Professor ' + super.fullName
    }
}
class Principal extends Person {
    override get fullName() {
        return 'Principal ' + super.fullName
    }
}
//NOTE Abstract classes
abstract class Shape {
    constructor(public color: string) {}

    abstract render(): void
}
class Circle extends Shape {
    constructor(public radius: number, color: string) {
        super(color)
    }
    override render(): void {
        console.log('Rendering a circle')
    }
}
//NOTE Interface classes
interface ICalendar {
    name: string
    addEvent(): void
    removeEvent(): void
}
interface ICloudCalendar extends ICalendar {
    sync(): void
}
class GoogleCalendar implements ICalendar {
    constructor(public name: string) {}
    addEvent(): void {
        throw new Error('Method not implemented.')
    }
    removeEvent(): void {
        throw new Error('Method not implemented.')
    }
}
class AnotherCalendar implements ICloudCalendar {
    constructor(public name: string) {}

    sync(): void {
        throw new Error('Method not implemented.')
    }
    addEvent(): void {
        throw new Error('Method not implemented.')
    }
    removeEvent(): void {
        throw new Error('Method not implemented.')
    }
}
//NOTE Polymorphism
function printNames(people: Person[]) {
    for (let person of people) console.log(person.fullName)
}
//General Class
export function main() {
    let account = new Account(1, 'David', 0)
    account.deposit(10)
    console.log(account instanceof Account)
    console.log(account.balance)
    //Index signatures
    let seats = new SeatAssignment()
    seats.A1 = 'Kolia'
    seats.A2 = 'David'
    seats['Something fancy'] = 'some text'
    console.log(seats)
    //Static properties
    let ride1 = new Ride()
    ride1.start()
    let ride2 = new Ride()
    ride2.start()
    console.log(Ride.activeRides)
    //Inheritance
    let student = new Student(1, 'John', 'Snow')
    console.log(student.fullName)
    student.walk()
    student.takeTest()
    let professor = new Teacher('Kolia', 'Melkadze')
    console.log(professor.fullName)
    // Abstract classes
    let circle = new Circle(1, 'Red')
    circle.render()
    //Polymorphism
    printNames([
        new Student(1, 'John', 'Smith'),
        new Teacher('Lena', 'Snow'),
        new Person('Kolia', 'Melkadze'),
        new Student(2, 'Emanuel', 'Si'),
        new Teacher('Cornelia', 'Joliet'),
        new Principal('Julius', 'Cosie')
    ])
    /*Prints
    - John Smith
    - Professor Lena Snow
    - Kolia Melkadze
    - Emanuel Si
    - Professor Cornelia Joliet
    - Principal Julius Cosie
    */
    const gCalendar = new GoogleCalendar('googler')
    const aCalendar = new AnotherCalendar('fancy calendar')
    console.log(gCalendar)
    console.log(aCalendar)
}
