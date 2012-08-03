
class PagesController < ApplicationController
  def home
  	@header = "Home"
  end

  def about
  	@header = "About"
  end

  def portfolio
  	@header = "Portfolio"
  end

  def contact
  	@header = "Contact"
  end
end
