class MovementsController < ApplicationController

    skip_before_action  :verify_authenticity_token
    
  def index
    respond_to do |f|
      @movements = Movement.all
      f.json { render json: @movements}
    end
  end

  def create
    artwork = Artwork.find(params["id"])
    movement = Movement.find_or_create_by(name: params["movement"].titleize)
    artwork.movements << movement
    artwork.save
  end
end
