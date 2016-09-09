function ArtworkFormController($scope, $http, movements) {

  $scope.selection = [];

  $scope.toggleSelection = function(movementId) {
    var id = $scope.selection.indexOf(movementId)
    if(id > -1){
      $scope.selection.splice(id, 1)
    } else {
      $scope.selection.push(movementId)
    }
  }

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
