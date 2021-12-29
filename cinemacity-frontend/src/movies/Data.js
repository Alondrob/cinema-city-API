import React, {useEffect, useState} from 'react'

const Data = () => {
    const [movies, setMovies] = useState([])

    const movieRequest = async () => {
        const url = `http://localhost:3000/movies`
        const response = await fetch(url);
        const responseJson = await response.json();
        setMovies(responseJson);
    }

    useEffect(() => {
        movieRequest();
       
    }, []);


    return (
        <div>
            {movies.map((value) => <div>
                <a href={`/movie/${value.id}/cast`}> {value.title}</a>
               
                 {/* {value.actors.map(actor => <p> {actor.name}</p>)} */}
                </div>)}
        </div>
    )
}

export default Data;
