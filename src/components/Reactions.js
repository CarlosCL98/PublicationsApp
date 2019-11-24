import React from "react";
import "../sass/Reactions.scss";
import Reaction from "./Reaction";

class Reactions extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      reactions: [{reaction: "blue"}, {reaction: "yellow"}, {reaction: "red"}]
    };
  }

  render() {
    const reactions = this.state.reactions.map((r, i) => (
      <div key={i} className="col-md-1  col-2">
        < Reaction
          key={i}
          reaction={r.reaction}
          addReaction={this.props.addReaction}
        />
      </div>
    ));
    return (
      <div id="reactions" className="row">
        {reactions}
      </div>
    );
  }
}

export default Reactions;