function Artwork($resource) {
  return $resource('http://localhost:8080/artworks/:id', {id: '@_id'})
})

angular
  .module('app')
  .services('Artwork', Artwork)
