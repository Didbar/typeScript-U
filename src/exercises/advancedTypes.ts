//• Given the data below, define a type alias for representing users.
type User = {
    name: string
    age: number
    occupation?: string
}

let users: User[] = [
    {
        name: 'John Smith',
        age: 30,
        occupation: 'Software engineer'
    },
    {
        name: 'Kate Müller',
        age: 28
    }
]
//• Birds fly. Fish swim. A Pet can be a Bird or Fish. Use type aliases to represent these
type Bird = {
    fly: () => {}
}
type Fish = {
    swim: () => {}
}
type Pet = Bird | Fish

// • Define a type for representing the days of week. Valid values are “Monday”, “Tuesday”,etc.
type weekDays = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday'

// • Simplify the following code snippets:

/* solution
let user1 = getUser()
console.log(user?.address?.street)
let x = foo ?? bar()
*/

/* • What is the problem in this piece of code?

 let value: unknown = 'a';
 console.log(value.toUpperCase());

*/
//fix
let value: unknown = 'a'
if (typeof value === 'string') console.log(value.toUpperCase())
