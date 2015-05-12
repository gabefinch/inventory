class Api::LocationsController < ApplicationController

  def index
    render json: Location.top_level
  end

  def show
    render json: Location.find(params[:id])
  end

private
  def location_params
    params.require(:location).permit(
    :name, :parent_id, :children)
  end
end
