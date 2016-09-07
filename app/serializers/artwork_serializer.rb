class ArtworkSerializer < ActiveModel::Serializer
  attributes :id, :title, :medium, :date_seen, :artist_id
  has_many :movements
  has_one :artist
end
