angular
  .module('app', ['ui.router'])
  .config(function($stateProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/views/index.html'
      })
      .state('artworks', {
        url: '/artworks',
        templateUrl: 'app/views/artworks/index.html'
      })
      .state('artworks.search', {
        url: '/search',
        templateUrl: 'app/views/artworks/search.html'
      })
      .state('new', {
        url: '/new',
        templateUrl: 'app/views/artworks/new.html'
      })
      .state('edit', {
        url: '/edit',
        templateUrl: 'app/views/artworks/edit.html'
      })
      .state('show', {
        url: '/show',
        templateUrl: 'app/views/artworks/show.html'
      })

  })
