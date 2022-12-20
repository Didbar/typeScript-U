//built in types
let sales = 123_456_789
let course = 'TypesScript'
let is_published = true
// arrays
let numbers: number[] = [1, 2, 3]
let numbersAny = []
// Tuples
let user: [number, string] = [1, 'David']
// Enums
enum Size {
    Small = 's',
    Medium = 'm',
    Large = 'l'
}
const enum Sizes {
    Small = 1,
    Medium,
    Large
}
let mySize: Sizes = Sizes.Medium
//Functions
function calculateTax(income: number, taxYear = 2022): number {
    return taxYear < 2022 ? income + 1.2 : income * 1.3
}

calculateTax(10_000)
//Objects
let employee: {
    readonly id: number
    name: string
    desc?: string
    retire: (date: Date) => void
} = {
    id: 1,
    name: '',
    retire: (date: Date) => console.log(date)
}

employee.name = 'David'
//Aliases
type Employee = {
    readonly id: number
    name: string
    desc?: string
    retire: (date: Date) => void
}
let employeeOne: Employee = {
    id: 1,
    name: 'Kolia',
    retire: (date: Date) => console.log(date)
}
// Union types
function kgToLbs(weight: number | string): number {
    //Narrowing
    return typeof weight === 'number' ? weight * 2.2 : parseInt(weight) * 2.2
}

kgToLbs(10)
kgToLbs('10kg')
//Intersection Types
type Draggable = {
    drag: () => void
}
type Resizable = {
    resize: () => void
}
type UIWidget = Draggable & Resizable

let textBox: UIWidget = {
    drag: () => {},
    resize: () => {}
}
//Literal Types
type Quantity = 50 | 100 | 150
let quantity: Quantity = 100

type Metric = 'cm' | 'inch'
//Nullable Types
function greet(name: string | null | undefined) {
    return name ? console.log(name.toUpperCase()) : console.log('Hola! Stranger')
}

greet(null)
greet(undefined)
//Optional Chaining
type Customer = {
    birthday?: Date
}
function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : { birthday: new Date() }
}

let customer = getCustomer(0)
//Optional property access operator
console.log(customer?.birthday?.getFullYear())
//Optional element access operator
// customer?.[0]

//Optional call
let log: any = null
log?.('a')
