//NOTE: allow JS
import { calculateTaxJS } from './utils/tax'
//NOTE: Using definitely typed declaration
import * as _ from 'lodash'

_.clone([1, 2, 3, 4])
const tax = calculateTaxJS(10_000)
console.log(tax)

//NOTE built in types
let sales = 123_456_789
let course = 'TypesScript'
let is_published = true
//NOTE  arrays
let numbers: number[] = [1, 2, 3]
let numbersAny = []
//NOTE  Tuples
let user: [number, string] = [1, 'David']
//NOTE  Enums
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
//NOTE Functions
function calculateTax(income: number, taxYear = 2022): number {
    return taxYear < 2022 ? income + 1.2 : income * 1.3
}

calculateTax(10_000)
//NOTE Objects
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
//NOTE Aliases
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
//NOTE  Union types
function kgToLbs(weight: number | string): number {
    //NOTE Narrowing
    return typeof weight === 'number' ? weight * 2.2 : parseInt(weight) * 2.2
}

kgToLbs(10)
kgToLbs('10kg')
//NOTE Intersection Types
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
//NOTE Literal Types
type Quantity = 50 | 100 | 150
let quantity: Quantity = 100

type Metric = 'cm' | 'inch'
//NOTE Nullable Types
function greet(name: string | null | undefined) {
    return name ? console.log(name.toUpperCase()) : console.log('Hola! Stranger')
}

greet(null)
greet(undefined)
//NOTE Optional Chaining
type Customer = {
    birthday?: Date
}
function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : { birthday: new Date() }
}

let customer = getCustomer(0)
//NOTE Optional property access operator ?
console.log(customer?.birthday?.getFullYear())
//NOTE Optional element access operator
//NOTE  customer?.[0]

//NOTE Optional call
let log: any = null
log?.('a')
//NOTE The nullish coalescing operator ??
let speed: number | null = null
let ride = {
    speed: speed ?? 30
}
//NOTE Type Assertions
// let phone = document.getElementById('phone') as HTMLInputElement
// let phone1 = <HTMLInputElement>document.getElementById('phone')
//NOTE The unknown Type
function render(document: unknown) {
    //NOTE Narrowing
    if (typeof document === 'string') {
        document.toUpperCase()
    }
    /* unknown vs any

    if (typeof instanceof wordDocument) {
        document.toUpperCase()
    }

    document.fly()
    document.move()
    document.whateverWeWant()
    */
}
//NOTE The never Type
/*
function reject(message: string): never {
    throw new Error(message)
}
function processEvents(): never {
    while (true) {
        // Read a message from a queue
    }
}

//NOTE  processEvents()
reject('...')
console.log('Hello World')
*/
