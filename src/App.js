import { Link, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { baseURL, config } from "./services";
import axios from "axios";
import Movie from "./components/Movie";
import Nav from "./components/Nav";
import Form from "./components/Form";
import MovieInfo from "./components/MovieInfo";
import About from "./components/About";
import Footer from "./components/Footer.jsx";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([], () => {
    const localData = localStorage.getItem("movies");
    return localData ? JSON.parse(localData) : [];
  });
  const [toggleFetch, setToggleFetch] = useState(false);
  const [search, setSearch] = useState("");
  const [filterMovies, setFilterMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const resp = await axios.get(baseURL, config);
      // console.log(resp.data.records);
      setMovies(resp.data.records);
      if (resp.data.records) {
        setFilterMovies(
          resp.data.records.filter((movie) => {
            // console.log("shoot me now");
            return movie.fields?.streaming_on?.toLowerCase().includes(search);
          })
        );
      }
      localStorage.setItem("movies", JSON.stringify(movies));
    };
    getMovies();
  }, [search, toggleFetch]);

  return (
    <div className="App">
      <div className="content">
        <Nav />
        <Route exact path="/">
          <h2 className="stream-it">stream-it!</h2>
          <input
            className="search-class"
            type="text"
            placeholder="streaming-service"
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="movies-list">
            {filterMovies.map((movie) => (
              <Movie
                key={movie.id}
                movie={movie}
                setToggleFetch={setToggleFetch}
              />
            ))}
          </div>
        </Route>
        <Route exact path="/form/id">
          <Form movies={movies} setToggleFetch={setToggleFetch} />
        </Route>
        <Route exact path="/movies/:id">
          <MovieInfo movies={movies} />
        </Route>
        <Route exact path="/about/id">
          <About />
        </Route>
      </div>
      <Footer />
    </div>
  );
}

export default App;
