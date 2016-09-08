class ArtworksController < ApplicationController

  skip_before_action  :verify_authenticity_token

  def index
    @artworks = Artwork.all
    render json: @artworks
  end

  def new
    @artwork = Artwork.new
  end

  def create
    @artwork = Artwork.new(artwork_params)
    @artwork.artist = Artist.find_or_create_by(name: params["artist_name"])

    if params["movement"] != ""
      @artwork.movements << Movement.find_or_create_by(name: params["movement"].capitalize)
    end
    @artwork.save
  end

  def show
    respond_to do |f|
      @artwork = Artwork.find(params[:id])
      f.json { render json: @artwork}
    end
  end

  private

  def artwork_params
    params.permit(:id, :title, :date_seen, :medium, :location)
  end

end
