import React from "react";

export default function Header() {
  return (
    <nav class="position-relative navbar navbar-expand-lg navbar-light py-3 mb-5">
      <a class="navbar-brand" href="#">
        <img src="metis-assets/logos/metis/metis.svg" alt="" width="106" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="side-menu"
        data-target="#sideMenuHeaders07"
        aria-controls="sideMenuHeaders07"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav position-absolute top-50 left-50 translate-middle">
          <li class="nav-item">
            <a class="nav-link" href="#">
              Product
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Company
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              About Us
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Features
            </a>
          </li>
        </ul>
        <div class="ml-auto">
          <a class="btn btn-outline-primary mr-2" href="#">
            Log In
          </a>
          <a class="btn btn-primary" href="#">
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
}
