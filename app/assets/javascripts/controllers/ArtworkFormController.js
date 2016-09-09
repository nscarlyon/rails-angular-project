function ArtworkFormController($scope, $http, movements) {

  $scope.submitArtwork = function() {
    $scope.artwork.movements = $scope.selection
    debugger;
    $http.post('http://localhost:3000/artworks', $scope.artwork)
  }
  this.movements = movements.data.movements
}

angular
  .module('app')
  .controller('ArtworkFormController', ArtworkFormController)
