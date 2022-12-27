//NOTE: Class decorators
//Decorator factory
type ComponentOptions = {
    selector: string
}
export function Component(options: ComponentOptions) {
    return (constructor: Function) => {
        console.log('Component decorator called')
        constructor.prototype.options = options
        constructor.prototype.uniqueID = Date.now()
        constructor.prototype.insertInDom = () => {
            console.log('Inserting the component in the DOM')
        }
    }
}
//Pipe Decorator
export function Pipe(constructor: Function) {
    console.log('Pipe decorator called')
    constructor.prototype.pipe = true
}

//NOTE: MEthod Decorator
export function Log(target: any, methodName: string, descriptor: PropertyDescriptor) {
    const original = descriptor.value as Function
    descriptor.value = function (...args: any) {
        console.log('Before')
        original.call(this, ...args)
        console.log('After')
    }
}
//NOTE: Accessor Decorator
export function Capitalize(target: any, methodName: string, descriptor: PropertyDescriptor) {
    const original = descriptor.get
    descriptor.get = function () {
        const result = original?.call(this)
        return typeof result === 'string' ? result.toUpperCase() : result
    }
}

//NOTE: property Decorator
export function MinLength(length: number) {
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

//NOTE: Parameter Decorator
type WatchedParameter = {
    methodName: string
    parameterIndex: number
}
export const watchedParameters: WatchedParameter[] = []
export function Watch(target: any, methodName: string, parameterIndex: number) {
    watchedParameters.push({
        methodName,
        parameterIndex
    })
}
