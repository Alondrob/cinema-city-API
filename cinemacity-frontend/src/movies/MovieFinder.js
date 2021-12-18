import React, {useState} from 'react'

const MovieFinder= ({movieData}) => {
    console.log('hello')
    const [searchMovies, setSearchMovies] = useState([])
    const [searchedWords, setSearchedWords] = useState(" ")

    // const handleFilter = (e) => {
    //     const searchedMovie = e.target.value;
    //     const newMovieArr = filter((value) => {
    //         return value.title.includes(searchedMovie)
    //     })
    //     setSearchMovies(newMovieArr)
    // }
    console.log(movieData)
    const handleChange = (event) => {
        setSearchedWords(event.target.value)
    }
    return (
        <div>
            <input type="text" placeholder='Search...' onChange={handleChange} value={searchedWords} />
        </div>
            
    )
}

export default MovieFinder
