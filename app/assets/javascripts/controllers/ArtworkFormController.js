function ArtworkFormController($scope, $http, $state, movements) {

  $scope.selection = [];
  this.movements = movements.data.movements

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
    $http.post('http://localhost:3000/artworks', $scope.artwork)
    $state.reload();
    alert("artwork successfully created!")
}

angular
  .module('app')
  .controller('ArtworkFormController', ArtworkFormController)
