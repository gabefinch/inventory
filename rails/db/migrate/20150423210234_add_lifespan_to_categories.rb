class AddLifespanToCategories < ActiveRecord::Migration
  def change
    add_column :categories, :lifespan, :integer
  end
end
