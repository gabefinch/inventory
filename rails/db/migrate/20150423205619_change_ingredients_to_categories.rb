class ChangeIngredientsToCategories < ActiveRecord::Migration
  def change
    rename_table :ingredients, :categories
  end
end
