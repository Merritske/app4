import { useEffect, useState } from 'react';
import './App.css';
import SearchIcon from "./components/search.svg"
import MovieCard from './components/MovieCard';

import data from './components/data';
import First from './components/first';
//37ef477

//Link werkt niet
const ApiUrl = "http://www.omdbapi.com?apikey=37ef477"

//https://www.youtube.com/watch?v=b9eMGE7QtTk

function App() {




  const [movies, setMovies] = useState([])
const [searchTerm, setSearchTerm] = useState("")
  const searchMovies = async (title) => {
    const response = await fetch(`${ApiUrl}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search)
  }
  useEffect(() => {
    searchMovies()
  }, [])

  return (
    <div className="App">




      <h1>MovieLand</h1>
      <div className='search'>
        <input
          placeholder='Search for movies'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>
{
  movies?.length > 0 ? (   
  <div className='container'>
    {movies.map((movie)=>{
      <MovieCard movie={movie}/>
    })}
    <MovieCard movie={movies[0]}/>
    <MovieCard movie={movies[0]}/>
    <MovieCard movie={movies[0]}/>
    <MovieCard movie={movies[0]}/>
 
    </div> ) : 
    (
      <div className='empty'>
        <h2>No movies found</h2></div>
    )
}
   
    
    <First/> 
    </div>
  );
}

export default App;
