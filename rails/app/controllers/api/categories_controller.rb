class Api::CategoriesController < ApplicationController

  def index
    render json: Category.top_level
  end

  def show
    render json: Category.find(params[:id])
  end

  def destroy
    cat = Category.find(params[:id])
    if cat.destroy
      head :no_content, status: :ok
    else
      render json: cat.errors, status: :unprocessable_entity
    end
  end

private
  def category_params
    params.require(:category).permit(
    :name, :parent_id, :children, :lifespan)
  end
end
