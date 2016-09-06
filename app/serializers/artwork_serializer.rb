class ArtworkSerializer < ActiveModel::Serializer
  attributes :id, :title, :medium, :date_seen, :artist_id
  has_one :artist
  has_many :movements
end
