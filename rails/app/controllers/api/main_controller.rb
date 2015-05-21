class Api::MainController < ApplicationController
  def everything
    render json: {
      categories:
        Category.top_level.map { |item| CategorySerializer.new(item)},
      locations:
        Location.top_level.map { |item| LocationSerializer.new(item)},
      ingredients:
        Ingredient.unused.map { |item| IngredientSerializer.new(item)}
    }
  end
  def everything_admin
    render json: {
      categories:
        Category.top_level.map { |item| CategorySerializer.new(item)},
      locations:
        Location.top_level.map { |item| LocationSerializer.new(item)},
      ingredients:
        Ingredient.all.map { |item| IngredientSerializer.new(item)}
    }
  end
end
