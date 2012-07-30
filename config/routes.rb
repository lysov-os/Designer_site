DesignerApp::Application.routes.draw do
  root :to => 'pages#home'
  match '/about', :to => 'pages#about'
  match '/contact', :to => 'pages#contact'
  match '/portfolio', :to => 'pages#portfolio'
end
