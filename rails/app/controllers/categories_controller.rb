class CategoriesController < ApplicationController
	def index
		@categories = Category.all
	end

	def new
		@category = Category.new
	end

	def create
		@category = Category.new(category_params)
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
end