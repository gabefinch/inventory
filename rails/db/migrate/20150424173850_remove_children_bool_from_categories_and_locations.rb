class RemoveChildrenBoolFromCategoriesAndLocations < ActiveRecord::Migration
  def change
    remove_column :categories, :children, :boolean
    remove_column :locations, :children, :boolean

  end
end
