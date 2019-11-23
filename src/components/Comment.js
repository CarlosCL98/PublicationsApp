import React from "react";
import "../sass/Comment.scss";
import Avatar from "../imgs/avatar.png";
import {InputLabel} from "@material-ui/core";

class Comment extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      creator: "Carlos",
      comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      creationDate: "Justo ahora"
    };
  }

  render() {
    return (
      <div id="comment">
        <div className="row">
          <div className="col-md-1">
            <img className="comment-avatar-image"
                 src={Avatar}
                 alt="avatar"
            />
          </div>
          <div className="col-md-11">
            <div className="row">
              <div className="col-md-1">
                <InputLabel className="comment-creator">{this.state.creator}</InputLabel>
              </div>
              <div className="col-md-11">
                <p className="comment-content">{this.state.comment}</p>
              </div>
            </div>
            <p className="comment-date-creation">{this.state.creationDate}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Comment;