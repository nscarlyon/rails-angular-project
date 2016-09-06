class ArtworksController < ApplicationController

  def new
    @artwork = Artwork.new
  end

  def create
    @artwork = Artwork.new(artwork_params)

    if @artwork.valid?
      @artwork.save
      redirect_to artworks_path
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
    params.require(:artwork).permit(:id, :artist_id, :title, :date_seen, :medium)
  end

end
