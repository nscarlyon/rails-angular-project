class ArtworkSerializer < ActiveModel::Serializer
  attributes :id, :title, :medium, :date_seen, :artist_id

end
