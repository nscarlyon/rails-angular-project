angular
  .module('artistApp', ['ui.router', 'templates', 'ngMessages'])
  .config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('artistIndex', {
      url: '/artists',
      templateUrl: 'artists/index.html',
      controller: 'ArtistIndexController as artists',
      resolve: {
        artists: function(Artist) {
          return Artist.getArtists()
        }
      }
    })
    .state('artistShow', {
      url: '/artists/:id',
      templateUrl: 'artists/show.html',
      controller: 'ArtistShowController as artist',
      resolve: {
        artist: function($stateParams, Artist) {
          return Artist.getArtist($stateParams.id)
        }
      }
    })
    .state('artistShow.artworks', {
      url: '/artworks',
      templateUrl: 'artists/artworks.html'
    })

  }])
