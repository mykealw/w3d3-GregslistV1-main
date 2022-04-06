import { ProxyState } from "../AppState.js";
import { getHouseForm } from "../components/HouseForm.js";
import { housesService } from "../Services/HousesService.js";
import { Pop } from "../Utils/Pop.js";

function _drawHouses() {
  let houseCardsTemplate = ''

ProxyState.houses.forEach(house => houseCardsTemplate += house.CardTemplate )

  document.getElementById('listings').innerHTML = `
    <div class="row houses">
      ${houseCardsTemplate}
    </div>
  `

  document.getElementById('listing-modal-form-slot').innerHTML = getHouseForm()
  document.getElementById('add-listing-modal-label').innerText = 'Add House 🏠'
}

export class HousesController {
  constructor() {
    ProxyState.on('houses', _drawHouses)
  }

  addHouse() {
    try {
      event.preventDefault()
       /**@type {HTMLFormElement} */
      // @ts-ignore
      const formElem = event.target
      const formData = {
       sqft: formElem.sqft.value,
       price: formElem.price.value,
       bedroom: formElem.bedroom.value,
       bathroom: formElem.bathroom.value,
       img: formElem.img.value
      }
      console.log({ formData })
      housesService.addHouse(formData)

      formElem.reset()
      // @ts-ignore
      bootstrap.Modal.getOrCreateInstance(document.getElementById('add-listing-modal')).hide()

    } catch (error) {
      console.error('[ADD_HOUSE_FORM_ERROR]', error)
      Pop.toast(error.message, 'error')
    }
  }

  drawHouses() {
    _drawHouses()
    // @ts-ignore
    bootstrap.Offcanvas.getOrCreateInstance(document.getElementById('sidenav')).hide()
  }
}