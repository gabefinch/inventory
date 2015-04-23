Rails.application.routes.draw do
  namespace :api do
    resources :categories do
      resources :ingredients
    end
    resources :locations
  end
end
