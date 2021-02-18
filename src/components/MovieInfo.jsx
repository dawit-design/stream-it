import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function MovieInfo(props) {
  const [title, setTitle] = useState("");
  const [streaming_on, setStreaming_on] = useState("");
  const [genre, setGenre] = useState("");
  const [release_year, setRealse_year] = useState("");
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");
  const params = useParams();

  useEffect(() =>{
    if (props.movies.length > 0 && params.id) {
      const moviesFind = props.movies.find((movie) => movie.id === params.id)
  
      if (moviesFind) {
        setTitle(moviesFind.fields.title)
        setStreaming_on(moviesFind.fields.streaming_on)
        setGenre(moviesFind.fields.genre)
        setRealse_year(moviesFind.fields.release_year)
        setRating(moviesFind.fields.rating)
        setDescription(moviesFind.fields.description)
      }
    }
  }, [])
  

  return (
    <div className="movie-info">
      <h2>Title: {title}</h2>
      <h4>Streaming-on: {streaming_on}</h4>
      <h5>Genre: {genre}</h5>
      <h5>Year: {release_year}</h5>
      <h5>Rating: {rating}</h5>
      <h5>Description: {description}</h5>
    </div>
  )
}
export default MovieInfo;