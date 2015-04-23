class Api::IngredientsController < ApplicationController

  def index
    render json: Ingredient.all
  end

  def show
    render json: Ingredient.find(params[:id])
  end

  # def new
  #   newCategory = Ingredient.new()
  # end

  def create
    ingredient = Ingredient.new(category_params)
    if ingredient.save
      render :json => ingredient, status: :created
    else
      render :json => ingredient.errors, status: :unprocessable_entity
    end
  end

  def destroy
    ingredient = Ingredient.find(params[:id])
    if ingredient.destroy
      head :no_content, status: :ok
    else
      render :json => ingredient.errors, status: :unprocessable_entity
    end
  end

  def update
    ingredient = Ingredient.find(params[:id])
    if ingredient.update(spot_params)
      head :no_content, status: :ok
    else
      render :json => ingredient.errors, status: :unprocessable_entity
    end
  end

private
  def category_params
    params.require(:ingredient).permit(:category_id, :location_id)
  end
end