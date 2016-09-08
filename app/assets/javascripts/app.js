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
        templateUrl: 'artworks/index.html',
        controller: 'ArtworksController as artworks',
        resolve: {
          artworks: function(Artwork) {
            return Artwork.getArtworks()
          }
        }
      })
      .state('artworks.search', {
        url: '/search',
        templateUrl: 'artworks/search.html',
        controller: 'ArtworksController as artworks',
        resolve: {
          artworks: function(Artwork) {
            return Artwork.getArtworks()
          }
        }
      })
      .state('artworks.new', {
        url: '/new',
        templateUrl: 'artworks/new.html'
      })
      .state('artworks.edit', {
        url: '/:id/edit',
        templateUrl: 'artworks/edit.html'
      })
      .state('artworks.show', {
        url: '/:id',
        templateUrl: 'artworks/show.html',
        controller: 'ArtworkShowController as artwork',
        resolve: {
          artwork: function($stateParams, Artwork) {
            return Artwork.getArtwork($stateParams.id)
          }
        }
      })
      .state('artists', {
        url: '/artists/:id',
        templateUrl: 'artists/show.html',
        controller: 'ArtistShowController as artist',
        resolve: {
          artist: function($stateParams, Artist) {
            return Artist.getArtist($stateParams.id)
          }
        }
      })
  })
