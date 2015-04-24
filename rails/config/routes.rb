Rails.application.routes.draw do
  namespace :api do
    resources :categories, only: [:index, :show, :create, :update, :destroy]
    resources :ingredients, only: [:index, :show, :create, :update, :destroy]
    resources :locations, only: [:index, :show, :create, :update, :destroy]
  end
end
