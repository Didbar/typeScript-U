import { Component, Pipe } from './decoratorsList'

@Component({ selector: '#my-profile' })
@Pipe
class ProfileComponent {}

let newProfile = new ProfileComponent()
console.log(newProfile)
