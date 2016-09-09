function ArtworkShowController(artwork, $scope, $http) {
  this.data = artwork.data["artwork"]

  $scope.updateDateSeen = function($scope) {
    $http.patch('http://localhost:3000/artworks/' + $scope.id, $scope)
  }

  $scope.destroyArtwork = function($scope) {
    $http.delete('http://localhost:3000/artworks/' + $scope.id)
  }
}

angular
  .module('app')
  .controller('ArtworkShowController', ArtworkShowController)
