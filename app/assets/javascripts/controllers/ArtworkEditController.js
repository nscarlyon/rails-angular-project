function ArtworkEditController(artwork, movements, $scope, $http) {
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
}

angular
  .module('app')
  .controller('ArtworkEditController', ArtworkEditController)
