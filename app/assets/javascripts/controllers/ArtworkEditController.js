function ArtworkEditController(artwork, movements, $state, $scope, $http) {
    this.data = artwork.data["artwork"]
    this.movements = movements.data.movements
    $scope.selection = [];

    artwork.data.artwork.movements.forEach(function(movement) {
      $scope.selection.push(movement.id)
    })

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
    }

}

angular
  .module('app')
  .controller('ArtworkEditController', ArtworkEditController)
