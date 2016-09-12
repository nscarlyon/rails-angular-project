function ArtworkShowController(artwork, $scope, $http, Artwork, $state) {
  this.data = artwork.data["artwork"]

  $scope.updateDateSeen = function($scope) {
    $http.patch('http://localhost:3000/artworks/' + $scope.id, $scope)
  }

  $scope.destroyArtwork = function($scope) {
    Artwork.destroyArtwork($scope.id)
    alert("artwork successfully deleted!")
  }
}

angular
  .module('app')
  .controller('ArtworkShowController', ArtworkShowController)
