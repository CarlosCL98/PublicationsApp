import React from "react";
import "../sass/Navbar.scss";

class NavBar extends React.Component {

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <label className="navbar-brand">Domicilios Test</label>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="navbar-user">
            <p>Hola! {this.props.user.name}</p>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;