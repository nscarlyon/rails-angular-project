function ArtworkFormController($scope, $http) {
  $scope.submitArtwork = function() {
    debugger;
    $http.post('http://localhost:3000/artworks', $scope.artwork)
  }
}

angular
  .module('app')
  .controller('ArtworkFormController', ArtworkFormController)
