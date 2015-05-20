class CategoriesController < ApplicationController
	def show

	end
	
	def index
		@categories = Category.all
	end

	def new
		@category = Category.new
	end

	def create
		@category = Category.new(category_params)
		respond_to do |format|
	    format.html { redirect_to :back }
	    format.js
	   end
	end

	def edit
		@category = Category.find(params[:id])
	end

	def update
		@category = Category.find(params[:id])
	end

	def destroy
		@category = Category.find(params[:id])
		@category.destroy
	end

		private
	def category_params
		params.require(:category).permit(:name)
	end
end