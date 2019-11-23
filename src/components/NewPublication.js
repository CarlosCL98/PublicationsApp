import React from "react";
import "../sass/NewPublication.scss";
import {Card, CardActions, CardContent, Button} from "@material-ui/core";
import Divider from "@material-ui/core/Divider";

class NewPublication extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      content: "",
      date: ""
    };
    this.handleOnWritePublication = this.handleOnWritePublication.bind(this);
    this.handleOnPublish = this.handleOnPublish.bind(this);
  }

  handleOnWritePublication = (e) => {
    this.setState({content: e.target.value});
  };

  handleOnPublish = (e) => {
    this.setState({date: new Date().toDateString()});
    console.log("Voy a publicar!");
  };

  render() {
    return (
      <div className="container">
        <Card className="cardNewPublication">
          <CardContent>
            <textarea className="textAreaPublication"
                      value={this.state.content}
                      onChange={this.handleOnWritePublication}
                      placeholder="Escribe aquí tu estado"/>
          </CardContent>
          <Divider/>
          <CardActions className="cardActionsPublication">
            <Button className="buttonPublish"
                    onClick={this.handleOnPublish}>Publicar</Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default NewPublication;