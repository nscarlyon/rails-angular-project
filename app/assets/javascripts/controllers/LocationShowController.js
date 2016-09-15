angular
  .module('app')
  .controller('LocationShowController', LocationShowController)

  function LocationShowController(location, artworks) {
    this.data = location
    this.artworks = artworks.data.artworks
  }
