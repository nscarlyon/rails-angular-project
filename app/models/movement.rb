class Movement < ApplicationRecord
  has_many :artwork_movements
  has_many :artworks, through: :artwork_movements
  has_many :artists, through: :artworks
end
