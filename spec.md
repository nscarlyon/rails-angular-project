# Specifications for the Angular Assessment

Specs:
- [x] Use Angular to build the app
      *I use angular to create different states*
- [x] Must contain some sort of nested views
      *I nested the show, search, new, and edit views for artworks. I also nested artists/artworks under the artists show page.*
- [x] Must contain some sort of searching as well as filtering based on some criteria. Ex: All items in the "fruit" category, or all tasks past due
      *The user may search artworks by title, artist name, medium, location, movements, and date seen*
- [x] Must contain at least one page that allows for dynamic updating of a single field of a resource. Ex: Allow changing of quantity in a shopping cart
      *The user may update the date_seen field for any artwork*
- [x] Links should work correctly. Ex: Clicking on a product in a list, should take you to the show page for that product
      *When you click on an artwork title or artist name, you are taken to their respective show view*
- [x] Data should be validated in Angular before submission
      *I used ngMessages to display validation errors on the artwork new form before submission.*
- [x] Must talk to the Rails backend using $http and Services
      *The artwork index and show view uses a service that sends a $http get request to the rails backend to retrieve the
      necessary data. The artwork forms send a $http post or $http patch request depending on the context via a service.*
- [x ] Your README.md includes a short description, install instructions, a contributors guide and a link to the license for your code
    *The README.md includes all these details.*

Confirm
- [x ] You have a large number of small Git commits
- [x ] Your commit messages are meaningful
- [x ] You made the changes in a commit that relate to the commit message
- [x ] You don't include changes in a commit that aren't related to the commit message
