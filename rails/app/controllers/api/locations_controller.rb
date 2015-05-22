class Api::LocationsController < ApplicationController

  def index
    render json: Location.top_level
  end

  def show
    render json: Location.find(params[:id])
  end

    def destroy
    cat = Location.find(params[:id])
    def destroyKids(parent)
      parent.children.each do |child|
        Ingredient.all.each do |ingredient|
          if child.id == ingredient.location_id
            ingredient.destroy
          end
        end
        destroyKids(child)
      end
      Ingredient.all.each do |ingredient|
        if parent.id == ingredient.location_id
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
  def location_params
    params.require(:location).permit(
    :name, :parent_id, :children)
  end
end
