angular
  .module('app')
  .controller('SearchRailsController', SearchRailsController)

  function SearchRailsController(Artwork, artworks, $state) {
    var vm = this
    vm.artworks = artworks.data.artworks

    this.submit = function(location, movement, title) {
      l = location.toLowerCase()
      m = movement.toLowerCase().replace(/ /g, '-')
      t = title.toLowerCase().replace(/ /g, '-')

       Artwork.searchRails(l, m, t).success(function(res) {
         vm.artworks = res.artworks
       }).error(function(err) {
         $state.reload()
       })
    }
  }
