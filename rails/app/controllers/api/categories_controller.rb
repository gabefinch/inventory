class Api::CategoriesController < ApplicationController

  def index
    render json: Category.top_level
  end

  def show
    render json: Category.find(params[:id])
  end

private
  def category_params
    params.require(:category).permit(
    :name, :parent_id, :children, :lifespan)
  end
end
