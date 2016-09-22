angular
  .module('app')
  .service('Artwork', Artwork)

function Artwork($http) {

  this.getArtworks = function() {
    return $http.get('http://localhost:3000/artworks')
  }

  this.getArtwork = function(id) {
    return $http.get('http://localhost:3000/artworks/' + id + '.json')
  }

  this.getArtworksLocation = function(location) {
    return $http.get('http://localhost:3000/locations/' + location)
  }

  this.searchRails = function(location, movement, title) {
    return $http.get('http://localhost:3000/artworks/search/' + location + '/' + movement + '/' + title)
  }

  this.destroyArtwork = function(id) {
    return $http.delete('http://localhost:3000/artworks/' + id)
  }

  this.createArtwork = function(artwork) {
    $http.post('http://localhost:3000/artworks', artwork)
  }

  this.updateArtwork = function(artwork) {
    $http.patch('http://localhost:3000/artworks/' + artwork.id, artwork)
  }
}
