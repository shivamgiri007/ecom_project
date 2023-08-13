import React from "react";
import logo from "../images/80601325.jpg";  
import "./Navbar.css";
import HomeList from "./NavbarListItems/HomeList";


export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
  {/* < className="container-fluid"> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
    <a className="navbar-brand myntra-logo" href="./">
      <img src={logo} alt="Logo" width="30" height="24" className="d-inline-block align-text-top"/>
    </a>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item dropdown">
          <HomeList />
      </li>
      <li className="nav-item dropdown">
          <HomeList />
      </li>
      <li className="nav-item dropdown">
          <HomeList />
      </li>
      <li className="nav-item dropdown">
          <HomeList />
      </li>
      <li className="nav-item dropdown">
          <HomeList />
      </li>
      <li className="nav-item dropdown">
          <HomeList />
      </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  
</nav>
    </>
  );
}
