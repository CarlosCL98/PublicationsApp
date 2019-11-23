import React from "react";
import "../sass/Publication.scss";
import {Card, CardContent, InputLabel} from "@material-ui/core";
import Avatar from "../imgs/avatar.png";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import Comment from "./Comment";

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
      commentSelected: false
    };
    this.handleOnWriteComment = this.handleOnWriteComment.bind(this);
    this.handleOnClickComment = this.handleOnClickComment.bind(this);
    this.handleCreateComment = this.handleCreateComment.bind(this);
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
      this.setState(prevState => ({
        comments: prevState.comments.concat({
          creator: prevState.creator.substring(0, this.state.creator.indexOf(" ")),
          comment: prevState.comment,
          creationDate: new Date().toDateString()
        }),
        comment: ""
      }));
    }
  };

  render() {
    const textareaComment = (
      <textarea className="form-control textarea-comments"
                value={this.state.comment}
                onChange={this.handleOnWriteComment}
                onKeyPress={this.handleCreateComment}
                placeholder="Escribe un comentario"
      />
    );
    const commentsLength = this.state.comments.length;
    const comments = this.state.comments.map((c, i) => (
      <Comment key={i}
               creator={c.creator}
               comment={c.comment}
               creationDate={c.creationDate}
      />
    ));
    return (
      <Card className="publication">
        <CardContent>
          <div className="row">
            <div className="col-md-1 publication-avatar">
              <img className="publication-avatar-image"
                   src={Avatar}
                   alt="avatar"
              />
            </div>
            <div className="col-md-11">
              <InputLabel className="label-publication">{this.state.creator}</InputLabel>
              <p className="date-publication">{this.state.creationDate}</p>
              <p className="publication-content">{this.state.content}</p>
              <Button className="button-reactions">Reaccionar</Button>
              <Button className="button-comments" onClick={this.handleOnClickComment}>Comentar</Button>
            </div>
          </div>
          <Divider/>
          <div className="row">
            <div className="col-md-6 reactions">
              Reacciones {this.state.reactions.length}
            </div>
            <div className="col-md-6 comments">
              <p>
                {commentsLength === 0 ? "No hay comentarios" :
                  commentsLength > 1 ? commentsLength + " comentarios" : commentsLength + " comentario"
                }</p>
            </div>
          </div>
          <Divider/>
          <div className="comments-section">
            {comments}
            {this.state.commentSelected ? textareaComment : ""}
          </div>
        </CardContent>
      </Card>
    );
  }
}

export default Publication;