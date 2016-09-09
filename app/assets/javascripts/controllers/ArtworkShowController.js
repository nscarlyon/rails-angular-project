function ArtworkShowController(artwork) {
  this.data = artwork.data["artwork"]
  debugger;
}

angular
  .module('app')
  .controller('ArtworkShowController', ArtworkShowController)
