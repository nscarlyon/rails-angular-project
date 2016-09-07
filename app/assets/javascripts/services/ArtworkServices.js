function Artwork($resource) {
  return $resource('http://localhost:3000/artworks/:id' + '.json', {id: '@_id'})
}

angular
  .module('app')
  .service('Artwork', Artwork)
