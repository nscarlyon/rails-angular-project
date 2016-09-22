angular
  .module('app')
  .controller('SearchRailsController', SearchRailsController)

  function SearchRailsController(Artwork, $scope) {

    this.submit = function() {
       Artwork.getArtworksLocation($scope.location).success(function(res) {
         $scope.artworks = res
       })
    }
  }
