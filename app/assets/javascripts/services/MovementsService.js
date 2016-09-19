function Movement($http) {
  this.getMovements = function() {
    return $http.get('http://localhost:3000/movements.json')
  }

  this.createMovement = function(artwork) {
    return $http.post('http://localhost:3000/movements', artwork)
  }
}

angular
  .module('app')
  .service('Movement', Movement)
