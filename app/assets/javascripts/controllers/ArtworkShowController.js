function ArtworkShowController(artwork, $scope, $http) {
  this.data = artwork.data["artwork"]

  $scope.updateDateSeen = function($scope) {
    $http.patch('http://localhost:3000/artworks', $scope)
  }
}

angular
  .module('app')
  .controller('ArtworkShowController', ArtworkShowController)
