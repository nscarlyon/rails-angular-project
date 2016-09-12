angular
  .module('app')
  .controller('ArtistShowController', ArtistShowController)

  function ArtistShowController(artist) {
    this.data = artist.data["artist"]
  }
