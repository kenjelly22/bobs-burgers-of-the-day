import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "./Header.css"
import NavBar from "./NavBar"

const Header = () => {
  return (
    <>
      <div className="header-container">
        <h1>Welcome to Bob's Burgers</h1>
        <NavBar />
      </div>
    </>
  )
}

export default Header
