class Api::LocationsController < ApplicationController

  def index
    render json: Location.top_level
  end

  def show
    render json: Location.find(params[:id])
  end

  # def new
  #   location = Location.new()
  # end

  def create
    location = Location.new(location_params)
    if location.save
      render json: location, status: :created
    else
      render json: location.errors, status: :unprocessable_entity
    end
  end

  def destroy
    location = Location.find(params[:id])
    if location.destroy
      head :no_content, status: :ok
    else
      render json: location.errors, status: :unprocessable_entity
    end
  end

  def update
    location = Location.find(params[:id])
    if location.update(location_params)
      head :no_content, status: :ok
    else
      render json: location.errors, status: :unprocessable_entity
    end
  end

private
  def location_params
    params.require(:location).permit(
    :name, :parent_id, :children)
  end
end
