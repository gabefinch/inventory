Rails.application.routes.draw do
  	resources :categories
  	resources :locations
  namespace :api, defaults: {format: :json} do
    get 'everything', to: 'main#everything'
    resources :categories, only: [:index, :show, :create, :update, :destroy]
    resources :ingredients, only: [:index, :show, :create, :update, :destroy]
    resources :locations, only: [:index, :show, :create, :update, :destroy]
  end
end
