import React from 'react'

function KIDS(props) {
  return (
    <>
      
        <a
          className="nav-link"
          data-bs-toggle="dropdown"
          href="./"
          role="button"
          aria-expanded="false"
        >
          {props.L3_name}
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

export default KIDS
KIDS.defaultProps = {
  L3_name : "name3"
}