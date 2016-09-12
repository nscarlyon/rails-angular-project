function Artwork($http) {

  this.getArtworks = function() {
    return $http.get('http://localhost:3000/artworks')
  }

  this.getArtwork = function(id) {
    return $http.get('http://localhost:3000/artworks/' + id + '.json')
  }

}

angular
  .module('app')
  .service('Artwork', Artwork)
