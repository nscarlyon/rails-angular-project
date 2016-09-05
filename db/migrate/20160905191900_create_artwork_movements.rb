class CreateArtworkMovements < ActiveRecord::Migration[5.0]
  def change
    create_table :artwork_movements do |t|
      t.integer :artwork_id
      t.integer :movement_id

      t.timestamps
    end
  end
end
