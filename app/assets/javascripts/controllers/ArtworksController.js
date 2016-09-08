function ArtworksController(artworks) {
  debugger;
  this.data = artworks.data["artworks"]
}

angular
  .module('app')
  .controller('ArtworksController', ArtworksController)
