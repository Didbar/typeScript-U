//NOTE: Generic Classes
class KeyValuePair<K, V> {
    constructor(public key: K, public value: V) {}
}
let pair = new KeyValuePair('1', 'a')
//NOTE: Generic Functions
class ArrayUtils {
    static wrapInArray<T>(value: T) {
        return [value]
    }
}
let numbersG = ArrayUtils.wrapInArray(1)
let stringsG = ArrayUtils.wrapInArray('1')
console.log(numbersG)
console.log(stringsG)
//NOTE: Generic Interfaces

//http://mywebsite.com/users
//http://mywebsite.com/products
interface Result<T> {
    data: T | null
    error: string | null
}

function fetch<T>(url: string): Result<T> {
    console.log(url)
    return { data: null, error: null }
}

interface UserG {
    username: string
}

interface ProductG {
    title: string
}

let result = fetch<UserG>('url')
console.log(result.data?.username)
let anotherResult = fetch<ProductG>('url')
console.log(anotherResult.data?.title)
//NOTE: Generic Constraints
class PersonG {
    constructor(public name: string) {}
}
class CustomerG extends PersonG {}

function echo<T extends PersonG>(value: T): T {
    return value
}

let res = echo(new PersonG('John'))
let res1 = echo(new CustomerG('Kolia'))
//NOTE: Extending Generic Classes
interface ShoppingList {
    title: string
    price: number
}
class Store<T> {
    protected _objects: T[] = []

    add(obj: T): void {
        this._objects.push(obj)
    }
}
//Pass on the generic type parameter
class CompressibleStore<T> extends Store<T> {
    compress() {}
}
//Restrict the generic type parameter
class SearchableStore<T extends { name: string }> extends Store<T> {
    find(name: string): T | undefined {
        return this._objects.find((obj) => obj.name === name)
    }
}
// Fix the generic type parameter
class ShoppingListStore extends Store<ShoppingList> {
    filterByCategory(category: string): ShoppingList[] {
        console.log(category)
        return []
    }
}

let store = new CompressibleStore<ShoppingList>()
store.compress()
