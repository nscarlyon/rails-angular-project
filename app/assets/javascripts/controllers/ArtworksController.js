function ArtworksController(artworks) {
  this.data = artworks.data["artworks"]
}

angular
  .module('app')
  .controller('ArtworksController', ArtworksController)
