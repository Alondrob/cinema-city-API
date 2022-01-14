import React, {useState} from 'react'

const  FavoriteMovie = () => {

    const [favoriteMovie, setFavoriteMovie] = useState();

    const addToFavorites =  () => {
        let obj = {method: 'post', headers: {accept: "application/json", "content-type":"application/json"}, body: JSON.stringify({favoriteMovie: setFavoriteMovie})};
        const url = `http://localhost:3000/movies`;

            fetch(url, obj)
            .then((res) => res.json())
            .then((data => setNewState(data.id)))

    }



    return (
        <div>
            
        </div>
    )
}

export default FavoriteMovie
