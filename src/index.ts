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
