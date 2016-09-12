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
}

angular
  .module('app')
  .service('Artwork', Artwork)
