import { Log } from './decoratorsList'

class PersonD {
    @Log
    say(message: string) {
        console.log(`Person says ${message}`)
    }
}

let personD = new PersonD()
personD.say('Hello')
