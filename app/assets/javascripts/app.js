angular
  .module('app', ['ui.router', 'templates'])
  .config(function($stateProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'index.html'
      })
      .state('artworks', {
        url: '/artworks',
        templateUrl: 'app/views/artworks/index.html'
      })
      .state('artworks.search', {
        url: '/search',
        templateUrl: 'app/views/artworks/search.html'
      })
      .state('artworks.new', {
        url: '/new',
        templateUrl: 'app/views/artworks/new.html.erb'
      })
      .state('artworks.edit', {
        url: '/:id/edit',
        templateUrl: 'app/views/artworks/edit.html'
      })
      .state('artworks.show', {
        url: '/:id/show',
        templateUrl: 'app/views/artworks/show.html',
        controller: 'ArtworkShowController as artwork',
        resolve: {
          artwork: function($stateParams, Artwork) {
            return Artwork.getArtwork($stateParams.id)
          }
        }
      })
      .state('artists', {
        url: '/artists/:id/show',
        templateUrl: 'app/views/artists/show.html.erb',
        controller: 'ArtistShowController as artist',
        resolve: {
          artist: function($stateParams, Artist) {
            return Artist.getArtist($stateParams.id)
          }
        }
      })
  })
