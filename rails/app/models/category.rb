class Category < ActiveRecord::Base
  belongs_to :parent, class_name: "Category"
  has_many :children,
    class_name: "Category",
    foreign_key: "parent_id"
  scope :top_level, ->{where(:parent_id => nil)}
  has_many :ingredients
  validates :name, presence: true

  def to_node
    self.attributes.merge({:categories => self.children.map { |c| c.to_node }})
  end
end
