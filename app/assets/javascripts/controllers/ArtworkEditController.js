function ArtworkEditController(artwork, movements, $scope, $http) {
    this.data = artwork.data["artwork"]
    this.movements = movements.data.movements
}

angular
  .module('app')
  .controller('ArtworkEditController', ArtworkEditController)
