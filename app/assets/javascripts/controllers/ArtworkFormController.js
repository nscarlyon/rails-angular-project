function ArtworkFormController(artwork, $scope, $http, $state, movements, Artwork) {
  $scope.selection = [];
  this.movements = movements.data.movements;
  this.data = null;

  if(Object.keys(artwork).length === 0) {
    this.data = artwork;
  } else {
    this.data = artwork.data["artwork"];
  }

  $scope.toggleSelection = function(movementId) {
    var id = $scope.selection.indexOf(movementId)
    if(id > -1){
      $scope.selection.splice(id, 1)
    } else {
      $scope.selection.push(movementId)
    }
  }

  $scope.submitArtwork = function() {
    $scope.artwork.data.movements = $scope.selection
    Artwork.submitArtwork($scope.artwork.data)
    $state.reload();
    alert("artwork successfully created!")
  }
}

angular
  .module('app')
  .controller('ArtworkFormController', ArtworkFormController)
