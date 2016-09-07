class Artist < ApplicationRecord
  has_many :artworks
  has_many :movements, through: :artworks
end
