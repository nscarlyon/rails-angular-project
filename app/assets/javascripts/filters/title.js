function Title() {
  return function(artworks, title) {
    return artworks.filter(function(artwork){
      return artwork.title == title;
    });
  };
}

angular
  .module('app')
  .filter('Title', Title)
