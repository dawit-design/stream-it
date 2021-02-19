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
  const [imageError, setImageError] = useState(true);
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
      }
    }
  }, []);

  return (
    <div className="movie-cont">
      <h2>Movie Info</h2>
      <div className="movie-info">
        <h2 className="info-box">Title: {title ? title : "Black Panther"}</h2>
        <img className="image-class" src={image ? image : "https://i.imgur.com/fs3wLRO.jpg" } alt="image" />
        <h4 className="info-box">Streaming-on: {streaming_on ? streaming_on : "DISNEY PLUS"}</h4>
        <h5 className="info-box">Genre: {genre ? genre : "SCI-FI"}</h5>
        <h5 className="info-box">Year: {release_year ? release_year : 2018}</h5>
        <h5 className="info-box">Rating: {rating ? rating : 7.3}</h5>
        <h5 className="info-box">Description: {description ? description : "Black Panther is a 2018 American superhero film based on the Marvel Comics character of the same name. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the 18th film in the Marvel Cinematic Universe (MCU)"}</h5>
        <button className="info-button" onClick={() => history.goBack()}>Back</button>
      </div>
     </div>
  );
}
export default MovieInfo;
