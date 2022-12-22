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
