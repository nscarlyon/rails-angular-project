function title() {
  console.log("hello!")
}

angular
  .module('app')
  .filter('title', title)
