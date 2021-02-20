import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import "./MovieInfo.css";
function MovieInfo(props) {
  const [title, setTitle] = useState("");
  const [image, setimage] = useState("");
  const [streaming_on, setStreaming_on] = useState("");
  const [genre, setGenre] = useState("");
  const [release_year, setRealse_year] = useState("");
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");
  const [video, setVideo] = useState("");
  const params = useParams();
  const history = useHistory();

  useEffect(() => {
    if (props.movies.length > 0 && params.id) {
      const moviesFind = props.movies.find((movie) => movie.id === params.id);

      if (moviesFind) {
        setTitle(moviesFind.fields.title);
        setimage(moviesFind.fields.image);
        setStreaming_on(moviesFind.fields.streaming_on);
        setGenre(moviesFind.fields.genre);
        setRealse_year(moviesFind.fields.release_year);
        setRating(moviesFind.fields.rating);
        setDescription(moviesFind.fields.description);
        setVideo(moviesFind.fields.video);
      }
    }
  }, []);

  return (
    <div className="movie-cont">
      <h2>Movie Info</h2>
      <div className="movie-info">
        <h2>Title: {title}</h2>
        <iframe
          className="video-link"
          width="560"
          height="315"
          src={video}
          frameBorder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <h4>Streaming-on: {streaming_on}</h4>
        <h5>Genre: {genre}</h5>
        <h5>Year: {release_year}</h5>
        <h5>Rating: {rating}</h5>
        <h5>Description: {description}</h5>
        <button className="info-button" onClick={() => history.goBack()}>
          Back
        </button>
      </div>
    </div>
  );
}
export default MovieInfo;
