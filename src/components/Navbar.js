import React from "react"
import { Link } from "gatsby"
import "./Navbar.css"

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-container">
      <Link to="/">
        <h1 className="logo">BlogLogo</h1>
      </Link>
      <ul>
        <li>
          <Link to="/" activeClassName="active">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" activeClassName="active">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" activeClassName="active">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  </nav>
)

export default Navbar
