export function getHouseForm() {
  return `
  <form onsubmit="app.housesController.addHouse()">
    <div class="mb-3 d-flex justify-content-between">
      <div>
        <label for="sqft" class="form-label">Square Feet</label>
        <input type="number" class="form-control" name="sqft" id="sqft" aria-describedby="sqft"
          placeholder="sqft..." required>
      </div>
      <div>
        <label for="bedroom" class="form-label">Bedroom(s)</label>
        <input type="number" class="form-control" name="bedroom" id="bedroom" aria-describedby="bedroom"
          placeholder="bedroom..." required>
      </div>
    </div>
    <div class="mb-3 d-flex justify-content-between">
      <div>
        <label for="bathroom" class="form-label">Bathroom(s)</label>
        <input type="number" class="form-control" name="bathroom" id="bathroom" aria-describedby="bathroom"
          placeholder="bathroom..."  required>
      </div>
      <div>
        <label for="price" class="form-label">Price</label>
        <input type="number" class="form-control" name="price" id="price" aria-describedby="price"
          placeholder="Price..." min='1' required>
      </div>
    </div>
    <div class="mb-3">
      <div>
        <label for="img" class="form-label">Image Url</label>
        <input type="url" class="form-control" name="img" id="img" aria-describedby="img"
          placeholder="Image Url..." required>
      </div>
    </div>
    <div class="mb-3">
      <div>
        <label for="description" class="form-label">Description</label>
        <textarea type="text" class="form-control" name="description" id="description"
          aria-describedby="description" placeholder="Description..." min="5" max="250" required> </textarea>
      </div>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      <button type="submit" class="btn btn-primary">Create</button>
    </div>
  </form>
  
  
  
  `
}