import React from "react";

export default function Header() {
  return (
    <nav className="position-relative navbar navbar-expand-lg navbar-light py-3 mb-5">
      <a className="navbar-brand" href="#">
        <img src="metis-assets/logos/metis/metis.svg" alt="" width="106" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="side-menu"
        data-target="#sideMenuHeaders07"
        aria-controls="sideMenuHeaders07"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={() => setToggle(!toggle)}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav position-absolute top-50 left-50 translate-middle">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Product
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Company
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              About Us
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Features
            </a>
          </li>
        </ul>
        <div className="ml-auto">
          <a className="btn btn-outline-primary mr-2" href="#">
            Log In
          </a>
          <a className="btn btn-primary" href="#">
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
}
