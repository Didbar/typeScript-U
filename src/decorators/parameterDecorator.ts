import { Watch, watchedParameters } from './decoratorsList'

class Vehicle {
    move(@Watch speed: number) {
        console.log(speed)
    }
}
let car = new Vehicle()
car.move(222)
console.log(watchedParameters)
