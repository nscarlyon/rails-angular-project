angular
  .module('app')
  .controller('SearchRailsController', SearchRailsController)

  function SearchRailsController(Artwork, $scope) {

    this.submit = function() {
      return Artwork.getArtworksLocation($scope.location)
    }
  }
