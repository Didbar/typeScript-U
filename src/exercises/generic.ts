/*
• Convert the function below to a generic function:
function echo(arg) { return arg; }
*/
function echoG<T>(arg: T): T {
    return arg
}
/*
• When compiling the following piece of code, we get an error saying ‘Property name
does not exist on type T’. How can we solve this problem?

function printName<T>(obj: T) {
    console.log(obj.name);
   }
*/
function printName<T extends { name: string }>(obj: T) {
    console.log(obj.name)
}

/*
• An Entity should have a unique identifier. The type of identifier, however, is dependent
on the use case. In some cases, the ID might be a number, in other cases, it might be a
string, GUID, etc. Represent the entity using a generic class.
*/
class Entity<T> {
    constructor(public readonly id: T) {}
}
/*
• Given the following interface, what does keyof User return?

interface User {
    userId: number;
    username: string;
}

solution:  It returns a union of the properties of User: ‘userId’ | ‘username’
*/
