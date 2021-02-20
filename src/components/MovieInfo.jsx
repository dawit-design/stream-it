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
        <h2>Title: {title ? title : "Black Panther"}</h2>
        <iframe
          className="video-link"
          width="560"
          height="315"
          src={video ? video : "https://www.youtube.com/embed/xjDjIWPwcPU"}
          frameBorder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <h4>Streaming-on: {streaming_on ? streaming_on : "DISNEY PLUS"}</h4>
        <h5>Genre: {genre ? genre : "SCI-FI"}</h5>
        <h5>Year: {release_year ? release_year : 2018}</h5>
        <h5>Rating: {rating ? rating : 7.3}</h5>
        <h5>
          Description:{" "}
          {description
            ? description
            : "Black Panther is a 2018 American superhero film based on the Marvel Comics character of the same name. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the 18th film in the Marvel Cinematic Universe (MCU)"}
        </h5>
        {/* <a className="video-link"href={video ? video : "https://www.youtube.com/watch?v=xjDjIWPwcPU"}>Trailer</a> */}
        <button className="info-button" onClick={() => history.goBack()}>
          Back
        </button>
      </div>
    </div>
  );
}
export default MovieInfo;
