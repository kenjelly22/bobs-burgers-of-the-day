import {Link} from "react-router-dom"
import "./NavBar.css"

const NavBar = () => {
  return (
    <nav>
      <Link to="/">Menu</Link> |<Link to="/search">Search</Link> |
      <Link to="/create">Create</Link>
    </nav>
  )
}

export default NavBar
