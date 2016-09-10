function ArtworkEditController(artwork, movements, $state, $scope, $http) {
    this.data = artwork.data["artwork"]
    this.movements = movements.data.movements
    $scope.selection = [];

    $scope.toggleSelection = function(movementId) {
      var id = $scope.selection.indexOf(movementId)
      if(id > -1){
        $scope.selection.splice(id, 1)
      } else {
        $scope.selection.push(movementId)
      }
    }

    $scope.updateArtwork = function(newArtwork) {
      newArtwork.movements = $scope.selection
      $http.patch('http://localhost:3000/artworks/' + newArtwork.id, newArtwork)
      $state.reload();
      alert("artwork successfully updated!")
    }

}

angular
  .module('app')
  .controller('ArtworkEditController', ArtworkEditController)
