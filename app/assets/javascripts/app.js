angular
  .module('app', ['ui.router', 'templates', 'ngMessages', 'artistApp'])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'index.html'
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
          movements: function(Movement) {
            return Movement.getMovements()
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
          movements: function(Movement) {
            return Movement.getMovements()
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
      .state('location', {
        url: '/locations/:name',
        templateUrl: 'locations/show.html',
        controller: 'LocationShowController as location',
        resolve: {
          location: function($stateParams) {
            var location = $stateParams.name
            return location;
          },
          artworks: function(Artwork) {
            return Artwork.getArtworks()
          }
        }
      })

      $urlRouterProvider.otherwise('/');
  })
