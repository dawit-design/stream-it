import { Link } from "react-router-dom";
function Nav() {
  return (
    <nav className="nav-bar">
      <Link className="nav" to="/">Home</Link>
      <Link className="nav" to="/movies/id">MovieInfo</Link>
      <Link className="nav" to="/form/id">Add movies</Link>
      <Link className="nav" to="/about/id">About </Link>
      {/* <Link className="nav" to="/search">Search Here</Link> */}
    </nav>
  );
}
export default Nav;
