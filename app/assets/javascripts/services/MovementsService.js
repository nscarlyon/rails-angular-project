function Movements($http) {
  this.getMovements = function() {
    return $http.get('http://localhost:3000/movements.json')
  }

  this.createMovement = function() {
    return $http.post('http://localhost:3000/movements')
  }
}

angular
  .module('app')
  .service('Movements', Movements)
