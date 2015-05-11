class Ingredient < ActiveRecord::Base
  belongs_to :category
  belongs_to :location
  validates :category_id, presence: true
  scope :unused, ->{ where("used_on IS NULL") }
end
