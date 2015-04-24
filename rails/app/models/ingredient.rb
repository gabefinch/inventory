class Ingredient < ActiveRecord::Base
  belongs_to :category
  belongs_to :location
  validates :category_id, presence: true
end
