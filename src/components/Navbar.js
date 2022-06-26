import React from "react";
import PropTypes from "prop-types";
// import {
//   Link
// } from "react-router-dom";

export default function Navbar(props) {

  // 
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/#">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/#">
                  Home
                </a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="/about">
                  {props.aboutTitle}
                </a>
              </li> */}
            </ul>
            {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
            {/* <div className="d-flex">
              <div className="bg-primary rounded mx-2" style={{height: '30px', width: '30px', cursor: 'pointer'}} onClick={props.modeToggle('primary')}></div>
              <div className="bg-danger rounded mx-2" style={{height: '30px', width: '30px', cursor: 'pointer'}} onClick={props.modeToggle('danger')}></div>
              <div className="bg-success rounded mx-2" style={{height: '30px', width: '30px', cursor: 'pointer'}} onClick={props.modeToggle('success')}></div>
              <div className="bg-warning rounded mx-2" style={{height: '30px', width: '30px', cursor: 'pointer'}} onClick={props.modeToggle('warning')}></div>
              <div className="bg-light rounded mx-2" style={{height: '30px', width: '30px', cursor: 'pointer'}} onClick={props.modeToggle('light')}></div>
              <div className="bg-dark rounded mx-2" style={{height: '30px', width: '30px', cursor: 'pointer'}} onClick={props.modeToggle('dark')}></div>

            </div> */}
            <div
              className={`form-check form-switch text-${
                props.mode === "light" ? "dark" : "light"
              }`}
            >
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.modeToggle}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                Change Mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutTitle: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Set title here",
  aboutTitle: "About",
};
