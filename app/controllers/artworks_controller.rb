class ArtworksController < ApplicationController
  #require 'byebug'

  skip_before_action  :verify_authenticity_token

  def index
    artworks = Artwork.all
    render json: artworks
  end

  def location
    location = params["location"]
    artworks = Artwork.all
    artworks_list = []

    artworks.each do |a|
      if a.location.downcase == location
        artworks_list << a
      end
    end

    render json: artworks_list

  end

  def create
    artwork = Artwork.new(artwork_params)
    artist = Artist.find_by(name: params["artist"]["name"].titleize)

    if !artist
      artwork.artist = Artist.new(artist_params)
    else
      artwork.artist = artist
    end

    artwork.movement_ids = params["movements"]

    if params["movement"] && params["movement"] != ""
      artwork.movements << Movement.find_or_create_by(name: params["movement"].titleize)
    end
    artwork.save
  end

  def show
    artwork = Artwork.find(params[:id])

    respond_to do |f|
      f.json { render json: artwork}
    end
  end

  def update
    artwork = Artwork.find(params[:id])
    artwork.update(artwork_params)
    artwork.artist = Artist.find_or_create_by(name: params["artist"]["name"].titleize)
    artwork.artist.update(artist_params)
    artwork.movement_ids = params["movements"]

    if params["movement"] && params["movement"] != ""
      artwork.movements << Movement.find_or_create_by(name: params["movement"].titleize)
    end

    artwork.save
  end

  def destroy
    artwork = Artwork.find(params[:id])
    artwork.destroy
  end

  private

  def artwork_params
    params.permit(:id, :title, :date_seen, :medium, :location)
  end

  def artist_params
    params.require(:artist).permit(:id, :name, :dob, :dod)
  end

end
