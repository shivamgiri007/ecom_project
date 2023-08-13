import React from 'react'

function HOME_LIVING() {
  return (
    <>
      
        <a
          className="nav-link dropdown-toggle"
          data-bs-toggle="dropdown"
          href="./"
          role="button"
          aria-expanded="false"
        >
          HOME & LIVING
        </a>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href="./">
              Action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="./">
              Another action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="./">
              Something else here
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a className="dropdown-item" href="./">
              Separated link
            </a>
          </li>
        </ul>
      
    </>
  )
}

export default HOME_LIVING