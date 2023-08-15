import React from "react";
import logo from "../images/80601325.jpg";
import "./Navbar.css";
import NavList from "./NavbarListItems/NavList";


export default function Navbar(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg m-2 border-bottom">
        {/* < className="container-fluid"> */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <div className="m_logo d-flex">
            <a className="navbar-brand myntra-logo" href="./">
              <img
                src={logo}
                alt="Logo"
                width="30"
                height="24"
                className="d-inline-block align-text-top"
              />
            </a>
            <ul className="navbar-nav me-5  Navbar_Items">
              <li className="nav-item dropdown p-2 text-nowrap">
                <NavList.MEN L1_name={props.L1}/>
              </li>
              <li className="nav-item dropdown p-2 text-nowrap">
                <NavList.WOMEN L2_name={props.L2}/>
              </li>
              <li className="nav-item dropdown p-2 text-nowrap">
                <NavList.KIDS L3_name={props.L3} />
              </li>
              <li className="nav-item dropdown p-2 text-nowrap">
                <NavList.HOME_LIVING L4_name={props.L4} />
              </li>
              <li className="nav-item dropdown p-2 text-nowrap">
                <NavList.BEAUTY L5_name = {props.L5} />
              </li>
              <li className="nav-item dropdown p-2 text-nowrap">
                <NavList.STUDIO L6_name = {props.L6} />
              </li>
            </ul>
          </div>
          <div className="search_logo_section">
            <form
              className="d-flex border border-secondary border-opacity-10 me-auto w-50 p-1 align-items-center bg-transparent search_form"
              role="search"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-search ms-3 p-0"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
              <input
                className="form-control me-2 border border-0 bg-transparent search_input fw-light"
                type="search"
                placeholder={props.SEARCH_BAR_TEXT}
                aria-label="Search"
              />
            </form>
            <form className="d-flex pe-5 icon_buttons ms-5">
              <button className="btn d-flex flex-column align-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-person"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                </svg>
                Profile
              </button>
              <button className="btn d-flex flex-column align-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-heart"
                  viewBox="0 0 16 16"
                >
                  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                </svg>
                Wishlist
              </button>
              <button className="btn d-flex flex-column align-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-handbag"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 1a2 2 0 0 1 2 2v2H6V3a2 2 0 0 1 2-2zm3 4V3a3 3 0 1 0-6 0v2H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11zm-1 1v1.5a.5.5 0 0 0 1 0V6h1.639a.5.5 0 0 1 .494.426l1.028 6.851A1.5 1.5 0 0 1 12.678 15H3.322a1.5 1.5 0 0 1-1.483-1.723l1.028-6.851A.5.5 0 0 1 3.36 6H5v1.5a.5.5 0 1 0 1 0V6h4z" />
                </svg>
                Bag
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.defaultProps = {
  L1 : "name1" ,
  L2 : "name2" ,
  L3 : "name3" ,
  L4 : "name4" ,
  L5 : "name5" ,
  L6 : "name6" , 
  SEARCH_BAR_TEXT : "Enter Text Here"
}
