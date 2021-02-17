import { Link } from 'react-router-dom';
function Nav() {
  return (
    <nav className="nav-bar">
      <Link to="/">Home</Link>
      <Link to='/movies/id'>MovieInfo</Link>
      <Link to='/form/id'>Add movies</Link>
      <Link></Link>
      
    </nav>
  )
}
export default Nav;