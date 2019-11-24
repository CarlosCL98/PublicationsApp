import React from "react";
import "../sass/Publication.scss";
import {Card, CardContent, InputLabel} from "@material-ui/core";
import Avatar from "../imgs/avatar.png";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import Comment from "./Comment";
import Reactions from "./Reactions";

class Publication extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      creator: this.props.creator,
      creationDate: this.props.creationDate,
      content: this.props.content,
      reactions: [],
      comment: "",
      comments: [],
      commentSelected: false,
      reactionsSelected: false
    };
    this.handleOnWriteComment = this.handleOnWriteComment.bind(this);
    this.handleOnClickComment = this.handleOnClickComment.bind(this);
    this.handleCreateComment = this.handleCreateComment.bind(this);
    this.handleOnClickReactions = this.handleOnClickReactions.bind(this);
  }

  handleOnWriteComment = (e) => {
    this.setState({comment: e.target.value});
  };

  handleOnClickComment = (e) => {
    this.setState(prevState => ({
      commentSelected: !prevState.commentSelected
    }));
  };

  handleCreateComment = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (!this.state.comment.length) {
        return;
      }
      this.setState(prevState => ({
        comments: prevState.comments.concat({
          creator: JSON.parse(localStorage.getItem("user")).name,
          comment: prevState.comment,
          creationDate: new Date().toDateString()
        }),
        comment: ""
      }));
    }
  };

  handleOnClickReactions = (e) => {
    this.setState(prevState => ({
      reactionsSelected: !prevState.reactionsSelected
    }));
  };

  addReaction = (newReaction) => {
    this.setState(prevState => ({
      reactions: prevState.reactions.concat(newReaction),
      reactionsSelected: false
    }));
  };

  render() {
    const textareaComment = (
      <textarea className="form-control publication-textarea-comments"
                value={this.state.comment}
                onChange={this.handleOnWriteComment}
                onKeyPress={this.handleCreateComment}
                placeholder="Escribe un comentario"
      />
    );
    const small = (
      <div className="publication-textarea-comments-small">
        <small>Presiona enter para enviar</small>
      </div>
    );
    const commentsLength = this.state.comments.length;
    const comments = this.state.comments.map((c, i) => (
      <Comment key={i}
               creator={c.creator}
               comment={c.comment}
               creationDate={c.creationDate}
      />
    ));
    const reactionBlue = this.state.reactions.some(r => (
      r.reaction === "blue"
    )) ? <img className="publication-reaction-image" src={"./imgs/blueCircle.png"} alt="reactionImage"/> : "";
    const reactionYellow = this.state.reactions.some(r => (
      r.reaction === "yellow"
    )) ? <img className="publication-reaction-image" src={"./imgs/yellowCircle.png"} alt="reactionImage"/> : "";
    const reactionRed = this.state.reactions.some(r => (
      r.reaction === "red"
    )) ? <img className="publication-reaction-image" src={"./imgs/redCircle.png"} alt="reactionImage"/> : "";
    return (
      <Card className="publication">
        <CardContent>
          <div className="row">
            <div className="col-md-1  col-sm-4  col-2  publication-avatar">
              <img className="publication-avatar-image"
                   src={Avatar}
                   alt="avatar"
              />
            </div>
            <div className="col-md-11  col-sm-8  col-10">
              <label
                className="publication-label">{this.state.creator.name} {this.state.creator.lastName}</label>
              <p className="publication-date">{this.state.creationDate}</p>
              <p className="publication-content">{this.state.content}</p>
              <button className="publication-button-reactions"
                      onClick={this.handleOnClickReactions}
              >Reaccionar
              </button>&nbsp;
              <button className="publication-button-comments" onClick={this.handleOnClickComment}>Comentar</button>
            </div>
          </div>
          {this.state.reactionsSelected ? <Reactions addReaction={this.addReaction}/> : ""}
          <Divider/>
          <div className="row">
            <div className="col-md-6  col-sm-6  col-6  publication-reactions">
              {reactionBlue}{reactionRed}{reactionYellow} &nbsp; {this.state.reactions.length === 0 ? "Sin reacciones" : this.state.reactions.length}
            </div>
            <div className="col-md-6  col-sm-6  col-6  publication-comments">
              <p>
                {commentsLength === 0 ? "No hay comentarios" :
                  commentsLength > 1 ? commentsLength + " comentarios" : commentsLength + " comentario"
                }
              </p>
            </div>
          </div>
          <Divider/>
          <div className="publication-comments-section">
            {comments}
            {this.state.commentSelected ? small : ""}
            {this.state.commentSelected ? textareaComment : ""}
          </div>
        </CardContent>
      </Card>
    );
  }
}

export default Publication;