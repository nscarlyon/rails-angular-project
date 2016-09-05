class Artwork < ApplicationRecord
  belongs_to :artist
  has_many :artwork_movements
  has_many :movements, through: :artwork_movements
end
