
class PagesController < ApplicationController
  def home
  	@header = "home"    
  end

  def about
  	@header = "about"
  end

  def portfolio
  	@header = "portfolio"
  end

  def contact
  	@header = "contact"
  end
end
