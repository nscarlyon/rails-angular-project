class ArtworksSerializer < ActiveModel::Serializer
  attributes :id, :title, :medium, :date_seen, :artist_id, :location
  has_many :movements
  has_one :artist, :serializer => ShortArtistSerializer
end
