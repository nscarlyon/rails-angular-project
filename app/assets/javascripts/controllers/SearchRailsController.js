angular
  .module('app')
  .controller('SearchRailsController', SearchRailsController)

  function SearchRailsController(Artwork) {
    var vm = this

    this.submit = function(location, movement, title) {
      l = location.toLowerCase()
      m = movement.toLowerCase()
      t = title.toLowerCase().replace(/ /g, '-')

       Artwork.searchRails(l, m, t).success(function(res) {
         vm.artworks = res.artworks
       })
    }
  }
