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
