class ArtistSerializer < ActiveModel::Serializer
  attributes :id, :name, :dob, :dod
  has_many :artworks, :serializer => ShortArtworkSerializer
  has_many :movements
end
