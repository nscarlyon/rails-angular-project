function ArtworkShowController(artwork) {
  this.data = artwork.data["artwork"]
}

angular
  .module('app')
  .controller('ArtworkShowController', ArtworkShowController)
