import { Link, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { baseURL, config } from './services';
import axios from 'axios';
import Movie from './components/Movie';
import Nav from './components/Nav';
import Form from './components/Form'
import MovieInfo from './components/MovieInfo'
// import Search from './components/Search'
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);
  const [movieImage, setMovieImage] = useState([]);

  const fetchMovie = () => {
    // const movieApi = `${baseURL}${config}`
    const moviePic = `https://api.themoviedb.org/3/discover/movie?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb`
    
    const getMovieFrom = axios.get(baseURL, config)
    const getMovieImage = axios.get(moviePic)
    axios.all([getMovieFrom, getMovieImage]).then(
      axios.spread((...allData) => {
        const allDataMovie = allData[0].data.records
        const getMovieImageOf = allData[1].data.results


        console.log(allDataMovie)
        console.log(getMovieImageOf)
        setMovies(allDataMovie);
        setMovieImage(getMovieImage);
      })
    )
  }
  useEffect(() => {
    fetchMovie()
  },[toggleFetch])

  // useEffect(() => {
  //   const getMovies = async () => {
  //     const resp = await axios.get(baseURL, config);

  //     console.log(resp.data.records)

  //     setMovies(resp.data.records);
  //   }
  //   getMovies();
  // }, [toggleFetch])

  return (
    <div className="App">
      <Nav />

      <Route exact path='/'>
       {/* <Search /> */}
      </Route>
      <Route exact path="/">
        <h2>stream-it movie list</h2>
        <div className="movie-list">
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              movie={movie}
              setToggleFetch={setToggleFetch} movieImage={movieImage}/>
          ))}
        </div>
      </Route>
      <Route exact path="/form/id">
        <Form />
      </Route>
      <Route exact path="/movies/:id">
        <h2>Movie-Info</h2>
        <MovieInfo movies={movies}/>
      </Route>
      
     
    </div>
  );
}

export default App;
