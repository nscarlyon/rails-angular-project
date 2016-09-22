angular
  .module('app')
  .controller('SearchRailsController', SearchRailsController)

  function SearchRailsController(ArtworkService, $scope) {

    this.submit = function() {
      return ArtworkService.getArtworksLocation($scope.location)
    }
  }
