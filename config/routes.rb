Rails.application.routes.draw do

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :artworks, :artists, :movements

  root 'welcome#index'

  get 'locations/:location', to:'artworks#location'
  get 'artworks/search/:location/:movement/:title', to: 'artworks#search'
end
