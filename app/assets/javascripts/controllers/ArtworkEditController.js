function ArtworkEditController(artwork, movements, $state, $scope, $http) {
    this.data = artwork.data["artwork"]
    this.movements = movements.data.movements
    $scope.selection = [];

    artwork.data.artwork.movements.forEach(function(movement) {
      $scope.selection.push(movement.id)
    })

    $scope.movementChecked = function(id) {
      var value

      artwork.data.artwork.movements.forEach(function(movement) {
        if(id === movement.id) {value = movement.id}
      })
      return value
    }

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
      $state.reload()
    }

}

angular
  .module('app')
  .controller('ArtworkEditController', ArtworkEditController)
