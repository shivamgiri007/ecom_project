import React from "react";
import logo from "../images/80601325.jpg";  
import "./Navbar.css";
import NavList from "./NavbarListItems/NavList"


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
      <ul className="navbar-nav me-auto mb-2   Navbar_Items">
      <li className="nav-item dropdown">
          <NavList.MEN />
      </li>
      <li className="nav-item dropdown">
          <NavList.WOMEN />
      </li>
      <li className="nav-item dropdown">
          <NavList.KIDS />
      </li>
      <li className="nav-item dropdown">
          <NavList.HOME_LIVING />
      </li>
      <li className="nav-item dropdown">
          <NavList.BEAUTY />
      </li>
      <li className="nav-item dropdown">
          <NavList.STUDIO />
      </li>
      </ul>
      <form className="d-flex border border-black" role="search">
        <button className="btn btn-outline-success border border-0" type="submit">Search</button>
        <input className="form-control me-2 border border-0" type="search" placeholder="Search for products brands and more" aria-label="Search"/>
      </form>
      <form action="click">
      <button class="btn"><i class="fa-regular fa-user"></i>Profile</button>
      <button class="btn"><i class="fa-regular fa-heart"></i>Wishlist</button>
      <button class="btn"><i class="fa-solid fa-bag-shopping"></i>Bag</button>
      </form>
    </div>
  
</nav>
    </>
  );
}
