function ArtworkFormController($scope, $http, MovementsService) {
  $scope.submitArtwork = function() {
    $http.post('http://localhost:3000/artworks', $scope.artwork)
  }

  this.movements = MovementsService.getMovements()
}

angular
  .module('app')
  .controller('ArtworkFormController', ArtworkFormController)
