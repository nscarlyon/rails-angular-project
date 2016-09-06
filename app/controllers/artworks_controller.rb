class ArtworksController < ApplicationController

  def show
    respond_to do |f|
      @artwork = Artwork.find(params[:id])
      f.json { render json: @artwork}
    end
  end
  
end
