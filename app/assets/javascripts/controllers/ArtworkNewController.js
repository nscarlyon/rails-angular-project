angular
  .module('app')
  .controller('ArtworkFormController', ArtworkFormController)

  function ArtworkFormController(artwork, $scope, movements, Artwork) {
    var vm = this;
    vm.selection = [];
    vm.movements = movements.data.movements;
    vm.movementChecked =  movementChecked;
    vm.toggleSelection = toggleSelection;
    vm.submitArtwork = submitArtwork;
    vm.data = artwork
    vm.data.movements = []




    function movementChecked(id) {
      var value;

      vm.data.movements.forEach(function(movement) {
        if(id === movement.id) {value = movement.id}
      })
      return value
    }

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

      if(artwork.id === undefined) {
        Artwork.createArtwork(artwork)
      } else {
        Artwork.updateArtwork(artwork)
      }
    }
}
