import React, {useState} from 'react'

const MovieFinder= () => {
    console.log('hello')
    const [searchMovies, setSearchMovies] = useState([])

    const handleFilter = (e) => {
        const searchedMovie = e.target.value;
        const newMovieArr = data.filter((value) => {
            return value.title.includes(searchedMovie)
        })
        setSearchMovies(newMovieArr)
    }
    return (
            <input type="text" placeholder='Search...' id="movie-search" onChange={handleFilter}/>
    )
}

export default MovieFinder
