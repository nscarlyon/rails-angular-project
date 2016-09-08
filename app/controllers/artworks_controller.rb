class ArtworksController < ApplicationController

  skip_before_filter  :verify_authenticity_token

  def index
    @artworks = Artwork.all
    render json: @artworks
  end

  def new
    @artwork = Artwork.new
  end

  def create
    @artwork = Artwork.new(artwork_params)

    if @artwork.valid?
      @artwork.save
    end
  end

  def show
    respond_to do |f|
      @artwork = Artwork.find(params[:id])
      f.json { render json: @artwork}
    end
  end

  private

  def artwork_params
    params.require(:artwork).permit(:id, :artist_id, :title, :date_seen, :medium, :location)
  end

end
