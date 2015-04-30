class Api::MainController < ApplicationController

  def everything
    render json: {}, serializer: EverythingSerializer
  end

end
