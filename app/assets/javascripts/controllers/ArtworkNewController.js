angular
  .module('app')
  .controller('ArtworkFormController', ArtworkFormController)

  function ArtworkFormController(artwork, $scope, movements, Artwork) {
    var vm = this;
    vm.data = artwork
    vm.data.movements = []
    vm.selection = [];

    vm.movements = movements.data.movements;
    vm.toggleSelection = toggleSelection;
    vm.submitArtwork = submitArtwork;


    function toggleSelection(movementId) {
      var id = vm.selection.indexOf(movementId)
      if(id > -1){
        vm.selection.splice(id, 1)
      } else {
        vm.selection.push(movementId)
      }
    }

    function submitArtwork(artwork) {
      artwork.movements = vm.selection
      Artwork.createArtwork(artwork)
    }
}
