import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "./Header.css"
import NavBar from "./NavBar"

const Header = () => {
  return (
    <>
      <header className="header-container">
        <h1>Welcome to Bob's Burgers</h1>
        <NavBar />
      </header>
    </>
  )
}

export default Header
