angular
  .module('app')
  .service('Movement', Movement)

function Movement($http) {
  this.getMovements = function() {
    return $http.get('/movements.json')
  }

  this.createMovement = function(artwork) {
    return $http.post('/movements', artwork)
  }
}
