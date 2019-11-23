import React from "react";
import "../sass/NewPublication.scss";
import {Card, CardActions, CardContent, Button} from "@material-ui/core";
import Divider from "@material-ui/core/Divider";

class NewPublication extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      creator: JSON.parse(localStorage.getItem("user")),
      content: ""
    };
    this.handleOnWritePublication = this.handleOnWritePublication.bind(this);
    this.handleOnPublish = this.handleOnPublish.bind(this);
  }

  handleOnWritePublication = (e) => {
    this.setState({content: e.target.value});
  };

  handleOnPublish = (e) => {
    if (!this.state.content.length) {
      return ;
    }
    this.props.addNewPublication({
      creator: this.state.creator,
      content: this.state.content,
      creationDate: new Date().toDateString()
    });
    this.setState({content: ""});
  };

  render() {
    return (
      <div>
        <Card>
          <CardContent>
            <textarea className="form-control textarea-publication"
                      value={this.state.content}
                      onChange={this.handleOnWritePublication}
                      placeholder="Escribe aquí tu estado"
            />
          </CardContent>
          <Divider/>
          <CardActions className="card-actions-publication">
            <Button className="button-publish"
                    onClick={this.handleOnPublish}>Publicar
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default NewPublication;