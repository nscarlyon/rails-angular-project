function MovieViewController($scope, $stateParams, Artwork) {
  $scope.artwork = Artwork.get({id: $stateParams.id})
}

angular
  .module('app')
  .controller('MovieViewController', MovieViewController)
