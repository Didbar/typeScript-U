function Log(target: any, methodName: string, descriptor: PropertyDescriptor) {
    const original = descriptor.value as Function
    descriptor.value = function (...args: any) {
        console.log('Before')
        original.call(this, ...args)
        console.log('After')
    }
}

class PersonD {
    @Log
    say(message: string) {
        console.log(`Person says ${message}`)
    }
}

let personD = new PersonD()
personD.say('Hello')
