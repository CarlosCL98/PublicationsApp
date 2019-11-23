import React from "react";
import "../sass/Publications.scss";
import Publication from "./Publication";
import NewPublication from "./NewPublication";

class Publications extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      publications: [{
        creator: `${JSON.parse(localStorage.getItem("user")).name} ${JSON.parse(localStorage.getItem("user")).lastName}`,
        creationDate: "Hace 40 minutos",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam leo quam, convallis at felis sit amet, feugiat convallis libero. Sed arcu elit, mollis dapibus sem nec, consequat dapibus nulla."
      }]
    };
    this.addNewPublication = this.addNewPublication.bind(this);
  }

  addNewPublication = (newPublication) => {
    this.setState(prevState => ({
      publications: prevState.publications.concat(newPublication)
    }));
  };

  render() {
    const publications = this.state.publications.map((p, i) => (
      <Publication key={i}
                   creator={p.creator}
                   creationDate={p.creationDate}
                   content={p.content}
      />
    ));
    return (
      <div className="container">
        {/*Space to do a publication*/}
        <NewPublication addNewPublication={this.addNewPublication}/>
        {/*Publications*/}
        {publications}
      </div>
    );
  }
}

export default Publications;