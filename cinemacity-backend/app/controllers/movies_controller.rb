class MoviesController < ApplicationController

    def index
        movies = Movie.all
        render json: movies
    end

    def create
        favorite_Movie = 
    end
end
