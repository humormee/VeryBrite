Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do 
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :events, only: [:index, :create, :update, :destroy, :show]
    resources :events, only: [:show] do
      resources :registrations, only: [:create, :index, :destroy]
    end
    # resources :registrations, only: [:index, :show, :destroy]
  end
  root "static_pages#root"
end
