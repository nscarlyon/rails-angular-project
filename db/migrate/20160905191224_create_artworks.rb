class CreateArtworks < ActiveRecord::Migration[5.0]
  def change
    create_table :artworks do |t|
      t.string :title
      t.string :medium
      t.string :location
      t.string :date_seen
      t.integer :artist_id

      t.timestamps
    end
  end
end
