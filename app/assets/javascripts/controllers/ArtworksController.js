angular
  .module('app')
  .controller('ArtworksController', ArtworksController)

  function ArtworksController(artworks) {
    this.data = artworks.data["artworks"]
  }
