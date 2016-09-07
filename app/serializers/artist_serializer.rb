class ArtistSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :artworks
  has_many :movements
end
