import React from "react";
import Router, { useRouter } from "next/router";
import Link from "next/link";
import NProgress from "nprogress";

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

export default function Header({ handleToggleClick }) {
  const router = useRouter();
  const isActive = (route) => route === router.pathname;
  return (
    <nav className="position-relative navbar navbar-expand-lg navbar-light py-3 mb-5">
      <Link href="/">
        <a className="navbar-brand">
          <img src="metis-assets/logos/metis/metis.svg" alt="" width="106" />
        </a>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="side-menu"
        data-target="#sideMenuHeaders07"
        aria-controls="sideMenuHeaders07"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={handleToggleClick}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav position-absolute top-50 left-50 translate-middle">
          <li className="nav-item">
            <Link href="/products">
              <a
                className={`nav-link ${isActive("/products") ? "active" : ""}`}
              >
                Product
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/company">
              <a className={`nav-link ${isActive("/company") ? "active" : ""}`}>
                Company
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/about">
              <a className={`nav-link ${isActive("/about") ? "active" : ""}`}>
                About Us
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/feature">
              <a
                className={`nav-link ${isActive("/features") ? "active" : ""}`}
              >
                Features
              </a>
            </Link>
          </li>
        </ul>
        <div className="ml-auto">
          <Link href="/login">
            <a className="btn btn-outline-primary mr-2">Log In</a>
          </Link>
          <Link href="/register">
            <a className="btn btn-primary">Sign Up</a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
