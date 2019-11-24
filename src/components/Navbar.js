import React from "react";
import "../sass/Navbar.scss";

class NavBar extends React.Component {

  render() {
    return (
      <nav className="navbar  navbar-expand-lg  navbar-light  bg-light">
        <div className="navbar-header">
          <label className="navbar-brand">Domicilios Test</label>
        </div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent"
                aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse  navbar-collapse" id="navbarContent">
          <div className="navbar-user">
            <p>Hola! {JSON.parse(localStorage.getItem("user")).name}</p>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;