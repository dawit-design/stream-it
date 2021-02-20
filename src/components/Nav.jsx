import { Link } from "react-router-dom";
import "./Nav.css";
function Nav() {
  return (
    <nav className="nav-bar">
      <div className="nav">
        <Link className="nav-links" to="/">
          Home
        </Link>
        <Link className="nav-links" to="/movies/id">
          MovieInfo
        </Link>
        <Link className="nav-links" to="/form/id">
          Add movies
        </Link>
        <Link className="nav-links" to="/about/id">
          About{" "}
        </Link>
      </div>
    </nav>
  );
}
export default Nav;
