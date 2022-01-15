import React, {useState, useContext, useEffect} from 'react'
import MovieCard from './MovieCard';
import { UserContext } from '../users/UserProvider';
const  FavoriteMovie = () => {
    const { user } = useContext(UserContext);
    const [favoriteMovies, setFavoriteMovies] = useState([]);

    const getFavorites = () => {
        let obj = { method: 'get', headers: { accept: "application/json", "content-type": "application/json", "Authorization": `Bearer ${user.token}` } };
        let url = `http://localhost:3000/favorite_movies`;

        fetch(url, obj)
        .then(res => res.json())
        .then(favoriteMovies => setFavoriteMovies(favoriteMovies))
    }

    useEffect(() => {
        getFavorites();
    }, [])


    return (
        <div>
           {favoriteMovies.map(movieData => <MovieCard movieData={movieData}/>)}
        </div>
    )
}

export default FavoriteMovie
