function ArtworkFormController(artwork, $scope, $http, $state, movements, Artwork) {
  $scope.selection = [];
  this.movements = movements.data.movements;
  this.data = null;

  if(Object.keys(artwork).length === 0) {
    this.data = artwork;
  } else {
    this.data = artwork.data["artwork"];

    this.data.movements.forEach(function(movement) {
      $scope.selection.push(movement.id)
    })
  }

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

  $scope.submitArtwork = function(artwork) {
    artwork.movements = $scope.selection

    if(artwork.id === undefined) {
      Artwork.submitArtwork($scope.artwork.data)
    } else {
      Artwork.updateArtwork(artwork)
    }

  }
}

angular
  .module('app')
  .controller('ArtworkFormController', ArtworkFormController)
