class Api::IngredientsController < ApplicationController

  def index
    render json: Ingredient.unused
  end

  def show
    render json: Ingredient.find(params[:id])
  end

  def create
    ingredient = Ingredient.new(ingredient_params)
    if ingredient.save
      render json: ingredient, status: :created
    else
      render json: ingredient.errors, status: :unprocessable_entity
    end
  end

  def destroy
    ingredient = Ingredient.find(params[:id])
    if ingredient.update({used_on: Time.now})
      head :no_content, status: :ok
    else
      render json: ingredient.errors, status: :unprocessable_entity
    end
  end

  def update
    ingredient = Ingredient.find(params[:id])
    if ingredient.update(ingredient_params)
      head :no_content, status: :ok
    else
      render json: ingredient.errors, status: :unprocessable_entity
    end
  end

private
  def ingredient_params
    params.require(:ingredient).permit(:category_id, :location_id)
  end
end
