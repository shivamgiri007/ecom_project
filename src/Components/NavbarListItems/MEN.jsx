import React from 'react'

function MEN(props) {
  return (
    <>
      
        <a
          className="nav-link"
          data-bs-toggle="dropdown"
          href="./"
          role="button"
          aria-expanded="false"
        >
          {props.L1_name}
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

export default MEN
MEN.defaultProps = {
  L1_name : "L1_name"
}