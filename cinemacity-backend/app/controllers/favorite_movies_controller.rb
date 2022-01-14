class FavoriteMoviesController < ApplicationController



    def create
        favorite_movie = Movie.find_by(favorite_movie_params)
    end
end


private 

def favorite_movie_params
    params.require(:favorite_movie).permit(:movie_id, :user_id)
end