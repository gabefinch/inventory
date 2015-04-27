class Api::CategoriesController < ApplicationController

  def index
    render json: Category.all
  end

  def show
    render json: Category.find(params[:id])
  end

  # def new
  #   newCategory = Category.new()
  # end

  def create
    category = Category.new(category_params)
    if category.save
      render :json => category, status: :created
    else
      render :json => category.errors, status: :unprocessable_entity
    end
  end

  def destroy
    category = Category.find(params[:id])
    if category.destroy
      head :no_content, status: :ok
    else
      render :json => category.errors, status: :unprocessable_entity
    end
  end

  def update
    category = Category.find(params[:id])
    if category.update(category_params)
      head :no_content, status: :ok
    else
      render :json => category.errors, status: :unprocessable_entity
    end
  end

private
  def category_params
    params.require(:category).permit(
    :name, :parent_id, :children, :lifespan)
  end
end
