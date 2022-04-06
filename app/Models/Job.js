import { generateId } from "../Utils/generateId.js"

export class Job {
constructor({ id= generateId(), title, salary, hours, remote, img, description}){
    if (!salary || !title || !hours) {
        throw new Error('You can\'t add a job without a salary, title, or hours.')
      }
      if (salary <= 0) {
        throw new Error('Where is the money?')
      }
    this.id = id
    this.title = title
    this.salary = salary
    this.hours = hours
    this.remote = remote || "no"
    this.img = img || 'no'
    this.description = description || ''
}
get CardTemplate() {
    return `
    <div class="car col-md-4 p-4">
      <div class="bg-white shadow rounded">
        <img class="w-100 rounded-top" src="${this.img}" alt="${this.title}-image">
        <div class="p-3">
          <p class="text-center uppercase"><b>${this.title} - ${this.title} - ${this.hours}</b></p>
          <p class="m-0">${this.description}</p>
        </div>
          <i class="mdi mdi-delete selectable" onclick="app.jobsController.removeJob('${this.id}')"></i>
        </div>
      </div>
    </div>`
  }

}