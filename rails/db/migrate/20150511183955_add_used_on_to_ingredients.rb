class AddUsedOnToIngredients < ActiveRecord::Migration
  def change
    add_column :ingredients, :used_on, :datetime
  end
end
