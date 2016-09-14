angular
  .module('app', ['ui.router', 'templates', 'ngMessages'])
  .config(function($stateProvider, $urlRouterProvider) {
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
      .state('search', {
        url: '/artworks/search',
        templateUrl: 'artworks/search.html',
        controller: 'ArtworksController as artworks',
        resolve: {
          artworks: function(Artwork) {
            return Artwork.getArtworks()
          }
        }
      })
      .state('new', {
        url: '/artworks/new',
        templateUrl: 'artworks/form.html',
        controller: 'ArtworkNewController as artwork',
        resolve: {
          artwork: function() {
            var artwork = {}
            return artwork
          },
          movements: function(Movements) {
            return Movements.getMovements()
          },
          artists: function(Artist) {
            return Artist.getArtists()
          }
        }
      })
      .state('edit', {
        url: '/artworks/:id/edit',
        templateUrl: 'artworks/form.html',
        controller: 'ArtworkEditController as artwork',
        resolve: {
          artwork: function($stateParams, Artwork) {
            return Artwork.getArtwork($stateParams.id)
          },
          movements: function(Movements) {
            return Movements.getMovements()
          },
          artists: function(Artist) {
            return Artist.getArtists()
          }
        }
      })
      .state('show', {
        url: '/artworks/:id',
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
      .state('artists.artworks', {
        url: '/artworks',
        templateUrl: 'artists/artworks.html'
      })

      $urlRouterProvider.otherwise('/');
  })
