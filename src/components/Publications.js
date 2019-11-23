import React from "react";
import "../sass/Publications.scss";
import SinglePublication from "./SinglePublication";

class Publications extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      publications: []
    };
  }

  render() {
    const publications = this.state.publications.map((p) => (
      <SinglePublication />
    ));
    return (
      <div className="container">
        {/*publications*/}
        <SinglePublication />
      </div>
    );
  }
}

export default Publications;