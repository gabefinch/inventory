class CreateIngredients < ActiveRecord::Migration
  def change
    create_table :ingredients do |t|
      t.string :name
      t.integer :parent_id
      t.boolean :children

      t.timestamps
    end
  end
end
