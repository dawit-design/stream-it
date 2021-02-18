import { Link, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { baseURL, config } from "./services";
import axios from "axios";
import Movie from "./components/Movie";
import Nav from "./components/Nav";
import Form from "./components/Form";
import MovieInfo from "./components/MovieInfo";
import About from './components/About'
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);
  const [search, setSearch] = useState("");
  
  useEffect(() => {
    const getMovies = async () => {
      const resp = await axios.get(baseURL, config);

      console.log(resp.data.records);

      setMovies(resp.data.records);
    };
    getMovies();
  }, [toggleFetch]);

  const filteredMovies = movies.filter(movie => {
    // console.log('shoot me now')
    return movie.fields.streaming_on.toLowerCase().includes(search)
  //  return movie.fields.streaming.toLowerCase().includes(search.toLowerCase())
  })


  return (
    <div className="App">
      <Nav />
      <Route exact path="/">
        
      </Route>
      <Route exact path="/">
        <h2>stream-it movie list</h2>
        <div className="search-bar">
        <input 
          type="text"
          placeholder="streaming-service"
          onChange={e => setSearch(e.target.value)}
        />
        </div>
        <div className="movie-list">
          {filteredMovies.map((movie) => (
            <Movie
              key={movie.id}
    
              movie={movie}
              setToggleFetch={setToggleFetch}
            />
          ))}
        </div>
      </Route>
      <Route exact path="/form/id">
        <Form movies={movies} setToggleFetch={setToggleFetch}/>
      </Route>
      <Route exact path="/movies/:id">
        <h2>Movie-Info</h2>
        <MovieInfo movies={movies} />
      </Route>
      <Route exact path="/about/id">
        <About/>
      </Route>
    </div>
  );
}

export default App;
