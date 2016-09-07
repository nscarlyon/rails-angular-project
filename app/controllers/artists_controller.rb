class ArtistsController < ApplicationController
  def show
    respond_to do |f|
      @artist = Artist.find(params[:id])
      f.json { render json: @artist}
    end
  end
end
