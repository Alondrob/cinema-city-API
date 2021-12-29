import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

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
            {casts.map(value => <li>
                {value.actor.name}
            </li>)}
        </div>
    )
}

export default Cast
