function Artwork($http) {
  this.getArtwork = function(id) {
    return $http.get('http://localhost:3000/artworks/' + id + '.json')
  }
}

angular
  .module('app')
  .service('Artwork', Artwork)
