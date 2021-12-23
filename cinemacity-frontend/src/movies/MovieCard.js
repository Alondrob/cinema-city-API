import React from 'react'

const MovieCard = ({movieData}) => {

    console.log('MovieCard', movieData)

    return (
        <div>
            {movieData.map((movie, index) => 
             <div>
                    <p>{movie.Title} ({movie.Year})</p>
                 <p></p>
                 
             </div>)}
        </div>
    )
}

export default MovieCard; 
 