angular
  .module('app', ['ui.router'])
  .config(function($stateProvider) {
    $stateProvider
      .state('artworks', {
        url: '/artworks',
        templateUrl: 'app/views/artworks/index.html'
      })
      .state('artworks.search', {
        url: '/search',
        templateUrl: 'app/views/artworks/search.html'
      })
  })
