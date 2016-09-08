class ArtworksSerializer < ActiveModel::Serializer
  attributes :id, :title, :medium, :date_seen, :artist_id
  has_many :movements
  has_one :artist, :serializer => ShortArtistSerializer
end
