import { useEffect, useState } from "react";
import { baseURL, config } from "../services";
import React from "react";
import "./Form.css";

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
      await axios.post(baseURL, { fields }, config);
      props.setToggleFetch((curr) => !curr);
    };
    moreMovies();
  };

  return (
    <div className="form">
      <h2>You suggest now!</h2>
    <form className="form-container" onSubmit={handleSubmit}>
      <label htmlFor="text">Title:</label>
      <input
        className="input-field"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <label htmlFor="text">Streaming on:</label>
      {/* <input className="input-field" type="text" value={streaming_on} onChange={(e) => setStreaming_On(e.target.value)} /> */}
      <select
        className="input-field"
        type="text"
        value={streaming_on}
        onChange={(e) => setStreaming_On(e.target.value)}
      >
        <option value="choose">Choose Streaming Service</option>
        <option value="netflix">NETFLIX</option>
        <option value="disney plus">DISNEY PLUS</option>
        <option value="apple tv">APPLE TV</option>
        <option value="hbo-max">HBO-MAX</option>
        <option value="hulu">HULU</option>
        <option value="prime video">PRIME VIDEO</option>
      </select>

      <label htmlFor="text">Year:</label>
      <input
        className="input-field"
        type="number"
        value={release_year}
        onChange={(e) => setRelease_Year(e.target.value)}
      />

      <label htmlFor="text">Genre:</label>
      <input
        className="input-field"
        type="text"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
      />

      <label htmlFor="text">Rate:</label>
      <input
        className="input-field"
        type="number"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />

      <label htmlFor="text">Description:</label>
      <textarea
        className="input-field"
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button className="button-class" type="submit">
        stream-it
      </button>
      </form>
      </div>
  );
}
export default Form;
