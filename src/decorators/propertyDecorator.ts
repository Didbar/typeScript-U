function MinLength(length: number) {
    return (target: any, propertyName: string) => {
        let value: string
        const descriptor: PropertyDescriptor = {
            get() {
                return value
            },
            set(newValue: string) {
                if (newValue.length < length) {
                    throw new Error(`${propertyName} should be at least ${length} char long`)
                }
                value = newValue
            }
        }
        Object.defineProperty(target, propertyName, descriptor)
    }
}

class UserD {
    @MinLength(4)
    password: string

    constructor(password: string) {
        this.password = password
    }
}

let userD = new UserD('12345')
console.log(userD.password)
