class User < ApplicationRecord
    has_secure_password
    has_many :reviews
    has_many :favorites
    has_many :favorites_movies, through: :favorites, source: :movie
end
