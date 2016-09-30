angular
  .module('app')
  .service('Artwork', Artwork)

function Artwork($http) {

  this.getArtworks = function() {
    return $http.get('/artworks')
  }

  this.getArtwork = function(id) {
    return $http.get('/artworks/' + id + '.json')
  }

  this.getArtworksLocation = function(location) {
    return $http.get('/locations/' + location)
  }

  this.searchRails = function(location, movement, title) {
    return $http.get('/artworks/search/' + location + '/' + movement + '/' + title)
  }

  this.destroyArtwork = function(id) {
    return $http.delete('/artworks/' + id)
  }

  this.createArtwork = function(artwork) {
    $http.post('/artworks', artwork)
  }

  this.updateArtwork = function(artwork) {
    $http.patch('/artworks/' + artwork.id, artwork)
  }
}
