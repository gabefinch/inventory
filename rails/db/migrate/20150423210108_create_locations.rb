class CreateLocations < ActiveRecord::Migration
  def change
    create_table :locations do |t|
      t.string :name
      t.integer :parent_id
      t.boolean :children
      t.timestamps
    end
  end
end
