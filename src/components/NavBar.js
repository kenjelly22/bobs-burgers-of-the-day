import {NavLink} from "react-router-dom"
import "./NavBar.css"

const NavBar = () => {
  return (
    <nav>
      <NavLink to="/">Menu</NavLink> |<NavLink to="/search">Search</NavLink> |
      <NavLink to="/create">Create</NavLink>
    </nav>
  )
}

export default NavBar
