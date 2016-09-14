function Artist($http) {

  this.getArtists = function() {
    return $http.get('http://localhost:3000/artists')
  }

  this.getArtist = function(id) {
    return $http.get('http://localhost:3000/artists/' + id + '.json')
  }

}

angular
  .module('app')
  .service('Artist', Artist)
