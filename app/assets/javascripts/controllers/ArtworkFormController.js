angular
  .module('app')
  .controller('ArtworkFormController', ArtworkFormController)

  function ArtworkFormController(artwork, $scope, movements, Artwork) {
    this.data = null;
    this.movements = movements.data.movements;
    $scope.selection = [];
    this.movementChecked = movementChecked;
    this.toggleSelection = toggleSelection;
    this.submitArtwork = submitArtwork;

    if(Object.keys(artwork).length === 0) {
      this.data = artwork;
    } else {
        this.data = artwork.data["artwork"];

        this.data.movements.forEach(function(movement) {
          $scope.selection.push(movement.id)
        })

        function movementChecked(id) {
          var value

          artwork.data.artwork.movements.forEach(function(movement) {
            if(id === movement.id) {value = movement.id}
          })
          return value
          }
      }

    function toggleSelection(movementId) {
      var id = $scope.selection.indexOf(movementId)
      if(id > -1){
        $scope.selection.splice(id, 1)
      } else {
        $scope.selection.push(movementId)
      }
    }

    function submitArtwork(artwork) {
      artwork.movements = $scope.selection

      if(artwork.id === undefined) {
        Artwork.createArtwork(artwork)
      } else {
        Artwork.updateArtwork(artwork)
      }
    }
}
