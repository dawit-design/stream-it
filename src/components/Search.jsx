// import { useState, useEffect } from "react";
// import Movie from "./Movie";


// const Search = (props) => {
//   const [movies, setMovies] = useState([]);
//   const [searchValue, setSearchValue] = useState("");
//   const [searchResults, setSearchResults] = useState([]);
  
  
//   const handleSearchInputChanges = (e) => {
//     setSearchValue(e.target.value);
//   }

//   // const resetInputField = () => {
//   //   setSearchValue("")
//   // }
//   useEffect(() => {
//     const movieResults = movies.filter(movie =>
//       movie.toLowerCase().includes(searchValue)
//     );
//     setSearchResults(movieResults);
//   },[searchValue])

//   const callSearchFunction = (e) => {
//     e.preventDefault();
//     props.movie(searchValue);
//     // resetInputField();
//   }

//   return (
//       <form className="search">
//         <input
//           value={searchValue}
//           onChange={handleSearchInputChanges}
//           type="text"
//       />
//       <ul>
//         {searchResults.map(movie => (
//           <li>{movie}</li>
//         ))}
//       </ul>
//         <input onClick={callSearchFunction} type="submit" value="SEARCH" />
//       </form>
//     );
// }

// export default Search;