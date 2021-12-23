import React, {useState, useEffect} from 'react'
import MovieCard from './MovieCard';


const MovieFinder= () => {
    console.log('hello')
    const [filteredMovies, setFilteredMovies] = useState([])
    const [searchValue, setSearchValue] = useState('');
    const [active, setActive] = useState('');
    
    // const handleChange = (event) => {
    //     const searchedWord = event.target.value
    //     const newFilter = movieData.filter((value) => {
    //         return value.title.toLowerCase().includes(searchedWord.toLowerCase());
            
    //     })
       
        
        //     if (searchedWord === '') {
        //         return setFilteredMovies([])
        //     }
        //     else {
        //         return setFilteredMovies(newFilter)
        //     }
        // }

    const movieRequest = async (searchValue) => {
        const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=24933623`
        const response = await fetch(url);
        const responseJson = await response.json();

        if (responseJson.Search) {
            setFilteredMovies(responseJson.Search)
        }
        
        
    }

    useEffect(() => {
        movieRequest(searchValue);
    }, [searchValue]);

    const poster = filteredMovies.map(val => {
        return val.Poster
    });

    const onImageClick = () => {
        console.log("Click!!!")
    }
   

    console.log(poster)
    
    return (
        <div>
            <input
                type='text' 
                value={searchValue} 
                onChange={(event) => setSearchValue(event.target.value)}
                placeholder='Search Movie...'
            />
            <div>
                
                    <button onClick={() => setActive('render')}>
                        <img src={poster} alt='movie' ></img>
                    </button>
                    
                    
                    <div>

                        {active === 'render' && <MovieCard movieData={filteredMovies}/>}
                    </div>
                       
                    
              
            </div>
        </div>
            
    )
};

export default MovieFinder
