function MovementsService($http) {
  this.getMovements = function() {
    return $http.get('http://localhost:3000/movements.json')
  }
}

angular
  .module('app')
  .service('MovementsService', MovementsService)
