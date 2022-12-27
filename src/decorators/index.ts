type ComponentOptions = {
    selector: string
}

//Decorator factory
function Component(options: ComponentOptions) {
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
function Pipe(constructor: Function) {
    console.log('Pipe decorator called')
    constructor.prototype.pipe = true
}

@Component({ selector: '#my-profile' })
@Pipe
class ProfileComponent {}
