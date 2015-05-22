class Api::CategoriesController < ApplicationController

  def index
    render json: Category.top_level
  end

  def show
    render json: Category.find(params[:id])
  end

  def destroy
    cat = Category.find(params[:id])
    def destroyKids(parent)
      parent.children.each do |child|
        Ingredient.all.each do |ingredient|
          if child.id == ingredient.category_id
            ingredient.destroy
          end
        end
        destroyKids(child)
      end
      Ingredient.all.each do |ingredient|
        if parent.id == ingredient.category_id
          ingredient.destroy
        end
      end
      parent.destroy
    end
    if destroyKids(cat)
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
