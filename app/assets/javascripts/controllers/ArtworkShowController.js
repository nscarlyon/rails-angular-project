angular
  .module('app')
  .controller('ArtworkShowController', ArtworkShowController)

  function ArtworkShowController(artwork, $scope, Artwork, Movements) {
    this.data = artwork.data["artwork"]

    this.updateDateSeen = function(artwork) {
      Artwork.updateArtwork(artwork)
    }

    this.addMovement = function(artwork) {
      Movements.createMovement(artwork)
    }

    this.destroyArtwork = function($scope) {
      Artwork.destroyArtwork($scope.id)
      alert("artwork successfully deleted!")
    }
  }
