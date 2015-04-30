class Location < ActiveRecord::Base
  belongs_to :parent,
    class_name: "Location"
  has_many :children,
    class_name: "Location",
    foreign_key: "parent_id"
    scope :top_level, ->{where(:parent_id => nil)}
  has_many :ingredients
  validates :name, presence: true

end

# Perhaps implement faster SQL http://hashrocket.com/blog/posts/recursive-sql-in-activerecord
# Or this gem: https://github.com/stefankroes/ancestry
