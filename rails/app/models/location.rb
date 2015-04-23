class Location < ActiveRecord::Base
  belongs_to :parent,
    class_name: "Location"
  has_many :children
    class_name: "Location",
    foreign_key: "parent_id"
  has_many :ingredients
  validates :name, presence: true
end
