angular
  .module('app')
  .controller('ArtworkShowController', ArtworkShowController)

  function ArtworkShowController(artwork, $scope, Artwork) {
    this.data = artwork.data["artwork"]

    $scope.updateDateSeen = function(artwork) {
      Artwork.updateArtwork(artwork)
    }

    $scope.destroyArtwork = function($scope) {
      Artwork.destroyArtwork($scope.id)
      alert("artwork successfully deleted!")
    }
  }
