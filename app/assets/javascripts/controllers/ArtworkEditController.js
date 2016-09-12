function ArtworkEditController(artwork, movements, $state, $scope, $http, Artwork) {
    this.data = artwork.data["artwork"]
    this.movements = movements.data.movements
    $scope.selection = [];

    this.data.movements.forEach(function(movement) {
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
      Artwork.updateArtwork(newArtwork)
    }

}

angular
  .module('app')
  .controller('ArtworkEditController', ArtworkEditController)
