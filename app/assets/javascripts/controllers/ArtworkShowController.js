angular
  .module('app')
  .controller('ArtworkShowController', ArtworkShowController)

  function ArtworkShowController(artwork, $scope, Artwork, Movement) {
    this.data = artwork.data["artwork"]

    this.updateDateSeen = function(artwork) {
      Artwork.updateArtwork(artwork)
    }

    this.addMovement = function(artwork) {
      Movement.createMovement(artwork)
    }

    this.destroyArtwork = function($scope) {
      Artwork.destroyArtwork($scope.id)
      alert("artwork successfully deleted!")
    }
  }
