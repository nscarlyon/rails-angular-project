angular
  .module('app')
  .controller('ArtworkEditController', ArtworkEditController)

  function ArtworkEditController(artwork, $scope, movements, Artwork) {
    var vm = this;
    vm.data = artwork.data["artwork"];
    vm.artists = artists.data.artists;
    vm.movements = movements.data.movements;
    vm.selection = [];

    vm.movementChecked =  movementChecked;
    vm.toggleSelection = toggleSelection;
    vm.submitArtwork = submitArtwork;

    vm.data.movements.forEach(function(movement) {
      vm.selection.push(movement.id);
    });

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
      Artwork.updateArtwork(artwork)
    }

  }
