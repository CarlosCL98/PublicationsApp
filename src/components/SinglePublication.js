import React from "react";
import "../sass/SinglePublication.scss";
import {Card, CardContent, InputLabel} from "@material-ui/core";
import Avatar from "../imgs/avatar.png";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import Comment from "./Comment";

class SinglePublication extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      creator: "Juan Rodríguez",
      creationDate: "Hace 40 minutos",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam leo quam, convallis at felis sit amet, feugiat convallis libero. Sed arcu elit, mollis dapibus sem nec, consequat dapibus nulla.",
      reactions: [],
      comment: "",
      comments: []
    };
    this.handleOnWriteComment = this.handleOnWriteComment.bind(this);
  }

  handleOnWriteComment = (e) => {
    this.setState({comment: e.target.value});
  };

  render() {
    return (
      <Card className="card-content">
        <CardContent>
          <div className="row">
            <div className="col-md-1">
              <img className="avatar-image"
                   src={Avatar}
                   alt="avatar"
              />
            </div>
            <div className="col-md-11">
              <InputLabel className="label-publication">{this.state.creator}</InputLabel>
              <p className="date-publication">{this.state.creationDate}</p>
              <p className="publication-content">{this.state.content}</p>
              <Button className="button-reactions">Reaccionar</Button><Button
              className="button-comments">Comentar</Button>
            </div>
          </div>
          <Divider/>
          <div className="row">
            <div className="col-md-6 reactions">
              Reacciones {this.state.reactions.length}
            </div>
            <div className="col-md-6 comments">
              <p>{this.state.comments.length} comentarios</p>
            </div>
          </div>
          <Divider/>
          <div className="comments-section">
            <Comment/>
            <textarea className="form-control textarea-comments"
                      value={this.state.comment}
                      onChange={this.handleOnWriteComment}
                      placeholder="Escribe un comentario"
            />
          </div>
        </CardContent>
      </Card>
    );
  }
}

export default SinglePublication;