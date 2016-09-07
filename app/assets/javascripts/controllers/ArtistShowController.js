function Artist(artist) {
  this.data = artist.data
}

angular
  .module('app')
  .controller('Artist', Artist)
