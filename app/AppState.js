import { Car } from "./Models/Car.js"
import { House } from "./Models/House.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { Job } from "./Models/Job.js"
class AppState extends EventEmitter {
  /** @type {import('./Models/House').House[]} */
  houses = [
    new House({
      sqft: 3000,
      price: 4000000,
      bedroom: 3,
      bathroom: 2.5,
      img:'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80 ',
      description:'Our neighbors said they want new neighbors',
    })
  ]
  /** @type {import('./Models/Car').Car[]} */
  cars = [
    new Car({
      color: 'red',
      description: 'This is my test car',
      img: 'https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/wp-content/uploads/2017/03/1988_Accord_3rd_Generation.jpg?resize=980:*',
      make: 'Honda',
      model: 'Accord',
      mileage: '289000',
      price: 5500,
      year: 1988
    })
  ]
 /** @type {import('./Models/Job').Job[]} */
  jobs = [
    new Job({
      title: 'Dog Walker',
      salary: 75000,
      hours: 40,
      remote: "No",
      img: 'https://images.unsplash.com/photo-1599406580992-46ab5d96f296?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80',
      description: 'You walk a bunch of good boys and girls'
    })
  ]


}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
