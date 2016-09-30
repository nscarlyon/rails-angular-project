angular
  .module('app')
  .service('Artist', Artist)

function Artist($http) {

  this.getArtists = function() {
    return $http.get('/artists')
  }

  this.getArtist = function(id) {
    return $http.get('/artists/' + id + '.json')
  }

}
