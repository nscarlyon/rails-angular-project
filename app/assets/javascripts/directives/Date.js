  function date() {
    return {
      restrict: 'A',
      require: 'ngModel',
      link: function (scope, element, attrs, ngModel) {
        ngModel.$validators.date = function(value) {
          return /\d{2}\d{2}\d{2}/i.test(value);
        }
      }
    }
  }

  angular
    .module('app')
    .directive('date', date)
