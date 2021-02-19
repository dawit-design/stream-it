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
  const params = useParams();
  const history = useHistory();

  useEffect(() => {
    if (props.movies.length > 0 && params.id) {
      const moviesFind = props.movies.find((movie) => movie.id === params.id);

      if (moviesFind) {
        setTitle(moviesFind.fields.title);
        setimage(moviesFind.fields?.image);
        setStreaming_on(moviesFind.fields.streaming_on);
        setGenre(moviesFind.fields.genre);
        setRealse_year(moviesFind.fields.release_year);
        setRating(moviesFind.fields.rating);
        setDescription(moviesFind.fields.description);
      }
    }
  }, []);

  return (
    <div className="movie-cont">
      <h2>Movie Info</h2>
      <div className="movie-info">
        <h2 className="info-box">Title: {title}</h2>
        <img
         className="image-class" src={image} alt="image" />
        <h4 className="info-box">Streaming-on: {streaming_on}</h4>
        <h5 className="info-box">Genre: {genre}</h5>
        <h5 className="info-box">Year: {release_year}</h5>
        <h5 className="info-box">Rating: {rating}</h5>
        <h5 className="info-box">Description: {description}</h5>
        <button className="info-button" onClick={() => history.goBack()}>Back</button>
      </div>
     </div>
  );
}
export default MovieInfo;
