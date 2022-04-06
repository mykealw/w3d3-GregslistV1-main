import { ProxyState } from "../AppState.js"
import { House } from "../Models/house.js"

class HousesService {
  addHouse(formData) {
    const newHouse = new House(formData)
    ProxyState.houses = [newHouse, ...ProxyState.houses]
  }
}

export const housesService = new HousesService()