import { MinLength } from './decoratorsList'

class UserD {
    @MinLength(4)
    password: string

    constructor(password: string) {
        this.password = password
    }
}

let userD = new UserD('12345')
console.log(userD.password)
