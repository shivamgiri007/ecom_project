import React from "react";
import logo from "../images/80601325.jpg";
import "../Components/Navbar.css";

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="myntra_logo">
          <img src={logo} alt="myntra logo" />
        </div>
        <div className="list_items">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="./">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="./">
                WOMEN
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="./">
                KIDS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="./">
                HOME & LIVING
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="./">
                BEAUTY
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="./">
                STUDIO
              </a>
            </li>
          </ul>
        </div>
        <div className="searchbar">
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
        </div>
      </nav>
    </>
  );
}
