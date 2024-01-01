import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'

export default function Navbar(props) {
  const onChangeb = () => {
    document.body.style.backgroundColor = 'blue';
  }
  const onChanger = () => {
    document.body.style.backgroundColor = 'red';
  }
  const onChangeg = () => {
    document.body.style.backgroundColor = 'green';
  }
  return (
    <>
    <div>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <link className="navbar-brand" to="#">{props.title}</link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <link className="nav-link active" aria-current="page" to="#">Home</link>
            </li>
            <li className="nav-item">
              <link className="nav-link" to="#">Link</link>
            </li>
            <li className="nav-item">
              <link className="nav-link disabled" to="#" tabIndex="-1" aria-disabled="true">Disabled</link>
            </li>
          </ul>
        </div>
      </div>
      <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            Bg color change
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><link className="dropdown-item" to="#" onClick={onChangeb}>blue</link></li>
            <li><link className="dropdown-item" to="#" onClick={onChanger}>red</link></li>
            <li><link className="dropdown-item" to="#" onClick={onChangeg}>green</link></li>
          </ul>
      </div>
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
        <input className="form-check-input" type="checkbox" role="switch" onClick={props.toggleMode} id="flexSwitchCheckDefault" />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
          Dark mode
        </label>
      </div>
    </nav>
    </div>
    </>
  )
}
Navbar.propTypes ={
    title: PropTypes.string
}
Navbar.defaultProps = {
    title : 'Set title here'
}

