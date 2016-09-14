angular
  .module('artistApp', ['ui.router', 'templates', 'ngMessages'])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
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

  })
