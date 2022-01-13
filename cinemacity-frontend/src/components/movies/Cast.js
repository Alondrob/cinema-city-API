import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import '../../styling/Cast.css'

const Cast = () => {
    const [casts, setCasts] = useState([])
    const {id} = useParams()
    const castRequest = async () => {
        const url = `http://localhost:3000/movies/${id}/movie_actors`
        const response = await fetch(url);
        const responseJson = await response.json();
        setCasts(responseJson);
    }

    useEffect(() => {
        castRequest();

    }, []);

   
    
    return (
        <div>
            {casts.length > 0 && <img src={casts[0].movie.image}/>}
            {casts.length > 0 && <p>Movie: {casts[0].movie.title}</p>}
            {casts.length > 0 && <p>Director: {casts[0].movie.director}</p>}
            {casts.length > 0 && <p>Plot: {casts[0].movie.plot}</p>}
            {casts.length > 0 && <p>Movie Time: {casts[0].movie.movie_length}</p>}
            {casts.length > 0 && <p>Imdb Rating: {casts[0].movie.rating}</p>}
            
            
            {casts.map(value => 
            <div>
                
                    <span className='actor-name'>{value.actor.name}</span><br></br>
                    <span className='actor-role'>As {value.role}</span>
             
                </div>)}

               
            </div>
                
         
    )
}

export default Cast;
