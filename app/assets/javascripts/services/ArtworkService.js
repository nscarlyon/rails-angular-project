function Artwork($http) {

  this.getArtworks = function() {
    return $http.get('http://localhost:3000/artworks')
  }

  this.getArtwork = function(id) {
    return $http.get('http://localhost:3000/artworks/' + id + '.json')
  }

  this.destroyArtwork = function(id) {
    return $http.delete('http://localhost:3000/artworks/' + id)
  }

  this.submitArtwork = function(artwork) {
    $http.post('http://localhost:3000/artworks', artwork)
  }

  this.updateArtwork = function(artwork) {
    $http.patch('http://localhost:3000/artworks/' + artwork.id, newArtwork)
  }
}

angular
  .module('app')
  .service('Artwork', Artwork)
