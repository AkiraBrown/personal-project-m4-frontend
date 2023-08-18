import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg bg-secondary bg-gradient sticky">
      <div className="container-fluid">
        <Link to={"/"} className="navbar-brand">
          Cars
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link" to={"/"}>
              Home
            </Link>

            <Link className="nav-link" to={"/about"}>
              About This App
            </Link>
            <Link className="nav-link d-flex" to={"/new-car"}>
              Create New Car
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
