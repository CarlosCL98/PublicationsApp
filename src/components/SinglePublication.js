import React from "react";
import "../sass/SinglePublication.scss";
import {Card, CardContent, InputLabel} from "@material-ui/core";
import Avatar from "../imgs/avatar.png";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";

class SinglePublication extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      creator: "Juan Rodríguez",
      creationDate: "Hace 40 minutos",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam leo quam, convallis at felis sit amet, feugiat convallis libero. Sed arcu elit, mollis dapibus sem nec, consequat dapibus nulla.",
      comments: []
    };
  }

  render() {
    return (
      <Card>
        <CardContent style={{textAlign: "left"}}>
          <div className="row">
            <div className="col-md-1">
              <img className="avatarImage"
                   src={Avatar} />
            </div>
            <div className="col-md-11">
              <InputLabel className="labelPublication" >{this.state.creator}</InputLabel>
              <p className="datePublication">{this.state.creationDate}</p>
              <p className="">{this.state.content}</p>
              <Button>Reaccionar</Button><Button>Comentar</Button>
            </div>
          </div>
          <Divider />
          <div className="row">
            <div className="col-md-6 reactions">
              Reacciones
            </div>
            <div className="col-md-6 comments">
              <p>{this.state.comments.length} comentarios</p>
            </div>
          </div>
          <Divider />
        </CardContent>
      </Card>
    );
  }

}

export default SinglePublication;