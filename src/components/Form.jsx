import { useEffect, useState } from "react";
import { baseURL, config } from '../services';
import "./Form.css"
import axios from "axios";

function Form(props) {
  const [title, setTitle] = useState("");
  const [streaming_on, setStreaming_On] = useState("");
  const [release_year, setRelease_Year] = useState("");
  const [genre, setGenre] = useState("");
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");
  
  const handleSubmit = (e) => {

    e.preventDefault();

    const moreMovies = async () => {
      
      const fields = {
        title,
        streaming_on,
        release_year,
        genre,
        rating,
        description,
      };
      await axios.post(baseURL, { fields }, config)
      props.setToggleFetch((curr) => !curr)

    };
    moreMovies();
  }

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <label htmlFor="text">Title:</label>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      
      <label htmlFor="text">Streaming on:</label>
      <input type="text" value={streaming_on} onChange={(e) => setStreaming_On(e.target.value)} />

      <label htmlFor="text">Year:</label>
      <input type="" value={release_year} onChange={(e) => setRelease_Year(e.target.value) }/>

      <label htmlFor="tetx">Genre:</label>
      <input type="text" value={genre} onChange={(e) => setGenre(e.target.value) }/>

      <label htmlFor="tetx">Rate:</label>
      <input type="text" value={rating} onChange={(e) => setRating(e.target.value) }/>

      <label htmlFor="tetx">Description:</label>
      <textarea type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      
      <button className="button-class" type="submit">stream-it</button>
    </form>
  );
}
export default Form;
