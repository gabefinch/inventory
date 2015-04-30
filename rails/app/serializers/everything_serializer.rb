class EverythingSerializer < ActiveModel::Serializer

  attributes :categories, :locations, :ingredients

  def categories
    Category.top_level.map do |item|
      CategorySerializer.new(item).as_json
    end
  end

  def locations
    Location.top_level.map do |item|
      LocationSerializer.new(item).as_json
    end  end

  def ingredients
    Ingredient.all.as_json
  end

end


# def current_user_as_json_helper
#   CurrentUserSerializer.new(current_user).to_json
# end
