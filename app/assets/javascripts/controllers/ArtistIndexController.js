angular
  .module('app')
  .controller('ArtistIndexController', ArtistIndexController)

  function ArtistIndexController(artists) {
    this.data = artists.data["artists"]
  }
