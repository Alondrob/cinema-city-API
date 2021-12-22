import React, {useState} from 'react'


const MovieFinder= ({movieData, placeholder}) => {
    console.log('hello')
    const [filteredMovies, setFilteredMovies] = useState([])
    

    // const handleFilter = (e) => {
    //     const searchedMovie = e.target.value;
    //     const newMovieArr = filter((value) => {
    //         return value.title.includes(searchedMovie)
    //     })
    //     setSearchMovies(newMovieArr)
    // }
    
    const handleChange = (event) => {
        const searchedWord = event.target.value
        const newFilter = movieData.filter((value) => {
            return value.title.toLowerCase().includes(searchedWord.toLowerCase());
            
        })
        if (searchedWord === '') {
            return setFilteredMovies([])
        }
        else {
            return setFilteredMovies(newFilter)
        }
    }

   
    
    return (
        <div>
            <input 
                type="text" 
                placeholder={placeholder} 
                onChange={handleChange} 
                
             />
             {filteredMovies.length != 0 && (
                 <div>
                     {filteredMovies.map((value, key) => {
                         return <a>{value.title}</a>
                     })}
                     </div>
             )}
             <div>
                
             </div>
        </div>
            
    )
}

export default MovieFinder
