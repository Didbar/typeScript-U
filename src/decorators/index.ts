function Component(constructor: Function) {
    console.log('Component decorator called')
    constructor.prototype.uniqueID = Date.now()
    constructor.prototype.insertInDom = () => {
        console.log('Inserting the component in the DOM')
    }
}

@Component
class ProfileComponent {}
