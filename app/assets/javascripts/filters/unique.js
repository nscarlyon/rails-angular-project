angular
  .module('app')
  .filter('unique', unique)

  function unique() {
    return function(array, field) {
      return _.uniq(array, function(a) { return a[field]; });
    };
  }
