angular
  .module('app')
  .controller('SearchRailsController', SearchRailsController)

  function SearchRailsController(Artwork) {
    var vm = this

    this.submit = function(location) {
       Artwork.getArtworksLocation(location).success(function(res) {
         vm.artworks = res.artworks
       })
    }
  }
