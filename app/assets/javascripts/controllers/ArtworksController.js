angular
  .module('app')
  .controller('ArtworksController', ArtworksController)

  function ArtworksController(artworks, movements) {
    this.data = artworks.data["artworks"]
    this.movements = movements.data.movements
  }
