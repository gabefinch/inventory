class IngredientSerializer < ActiveModel::Serializer
  attributes :category_id, :location_id, :created_at, :id


  def created_at
    object.created_at.to_f * 1000
  end

  def updated_at
    object.updated_at.to_f * 1000
  end
end
