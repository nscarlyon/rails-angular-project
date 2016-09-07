function ArtworkShowController(artwork) {
  this.data = artwork.data
}

angular
  .module('app')
  .controller('ArtworkShowController', ArtworkShowController)
