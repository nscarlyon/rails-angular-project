function ArtistShowController(artist) {
  this.data = artist.data["artist"]
}

angular
  .module('app')
  .controller('ArtistShowController', ArtistShowController)
