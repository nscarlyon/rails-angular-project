class ArtistSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :artworks, :serializer => ShortArtworkSerializer
  has_many :movements
end
