import { Link } from "react-router-dom";
import axios from "axios";
import { baseURL, config } from "../services";


function Movie(props) {
  const deleteMovie = async () => {
    const url = `${baseURL}/${props.movie.id}`;
    await axios.delete(url, config);

    props.setToggleFetch((curr) => !curr);
  };

  const { title, streaming_on } = props.movie.fields;

  return (
    <div className="movie-list" key={props.movie.id}>
      <h3>Title: {title}</h3>
      <h5>Streaming-on: {streaming_on}</h5>
      <Link to={`/movies/${props.movie.id}`}>
        <button >MovieInfo</button>
      </Link>
      {/* <button onClick={deleteMovie}>Delete!</button> */}
    </div>
  );
}
export default Movie;