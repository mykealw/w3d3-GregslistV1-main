import { generateId } from "../Utils/generateId.js"

export class House {
    constructor({id =generateId(), sqft, price, bedroom, bathroom, img, description}){
if (!price || !bedroom || !sqft){
    throw new Error('You can\'t add a car without a price, bedroom, or square footage')}
if (price <= 0){
    throw new Error('Where my money?')
}
    this.id = id
    this.sqft = sqft
    this.price = price
    this.bedroom = bedroom
    this.bathroom = bathroom || '' 
    this.img = img || ''
    this.description = description || ''
}
get CardTemplate() {
    return `
    <div class="car col-md-4 p-4">
      <div class="bg-white shadow rounded">
        <img class="w-100 rounded-top" src="${this.img}" alt="${this.bedroom}-image">
        <div class="p-3">
          <p class="text-center uppercase"><b>${this.bedroom} bdrm - ${this.bathroom} btrm - ${this.sqft} sqft</b></p>
          <p class="m-0">${this.description}</p>
        </div>
        <div class="p-3 d-flex justify-content-between align-items-center">
          <p class="m-0">$${this.price}</p>
          <i class="mdi mdi-delete selectable" onclick="app.housesController.removeHouse('${this.id}')"></i>
        </div>
      </div>
    </div>  `
}




    }






