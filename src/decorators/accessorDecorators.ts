import { Capitalize } from './decoratorsList'

class PersonAccessor {
    constructor(public firstName: string, public lastName: string) {}

    @Capitalize
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

let personA = new PersonAccessor('David', 'Didbaridze')
console.log(personA.fullName)
