# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Artist.create(name: "Klimt")
Artwork.create(title: "test title", medium: "oil painting", artist_id: 1)
Movement.create(name: "symbolism")
ArtworkMovement.create(artwork_id: 1, movement_id: 1)

Artwork.create(title: "tree of life", medium: "painting", artist_id: 1, date_seen: "5/23/16")
ArtworkMovement.create(artwork_id: 2, movement_id: 1)
