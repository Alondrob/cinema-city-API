import React from 'react'

const MovieCard = ({movieData}) => {

    console.log('MovieCard', movieData)

    return (
        <div>
            
             <div>
                    <p>{movieData.Title} ({movieData.Year})</p>
                 <p></p>
                 
             </div>
        </div>
    )
}

export default MovieCard; 
 