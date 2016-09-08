class MovementsController < ApplicationController
  def index
    respond_to do |f|
      @movements = Movement.all
      f.json { render json: @artwork}
    end
  end
end
