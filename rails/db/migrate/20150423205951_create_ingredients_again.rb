class CreateIngredientsAgain < ActiveRecord::Migration
  def change
    create_table :ingredients do |t|
      t.integer :category_id
      t.integer :location_id
      t.timestamps
    end
  end
end
