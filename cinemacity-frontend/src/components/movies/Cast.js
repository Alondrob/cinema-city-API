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
            {casts.length > 0 && <h1>{casts[0].movie.title}</h1>}
            
            {casts.map(value => 
            <div>
                
                    <span className='actor-name'>{value.actor.name}</span><br></br>
                    <span className='actor-role'>As {value.role}</span>
             
                </div>)}

               
            </div>
                
         
    )
}

export default Cast
