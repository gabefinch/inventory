class CategorySerializer < ActiveModel::Serializer
  attributes :name, :parent_id, :created_at, :id, :lifespan

  has_many :children

  def created_at
    object.created_at.to_f * 1000
  end

  def updated_at
    object.updated_at.to_f * 1000
  end
end
