import {NavLink} from "react-router-dom"

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({isActive}) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Menu
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/search"
                className={({isActive}) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Search
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/create"
                className={({isActive}) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Create
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
