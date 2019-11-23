import React from "react";
import "../sass/Main.scss"
import NewPublication from "./NewPublication";
import Publications from "./Publications";

class Main extends React.Component {

  render() {
    return (
      <div>
        <NewPublication />
        <Publications />
      </div>
    );
  }
}

export default Main;