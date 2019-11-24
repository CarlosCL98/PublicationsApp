import React from "react";
import "../sass/Reaction.scss";

class Reaction extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      reaction: this.props.reaction
    };
    this.handleReaction = this.handleReaction.bind(this);
  }

  handleReaction = (e) => {
    this.props.addReaction({
      reaction: this.state.reaction
    });
  };

  render() {
    return (
      <button id="reaction-button"
              onClick={this.handleReaction}
      >
        <img className="reaction-button-image"
             src={"./imgs/" + this.state.reaction + "Circle.png"}
             alt="reactionImage"
        />
      </button>
    );
  }
}

export default Reaction;