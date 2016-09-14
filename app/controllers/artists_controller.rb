class ArtistsController < ApplicationController

  def index
    artists = Artist.all
    render json: artists
  end

  def show
    artist = Artist.find(params[:id])
    respond_to do |f|
      f.json { render json: artist}
    end
  end

end
