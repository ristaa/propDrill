import React, { Component } from "react";
import { render } from "react-dom";

const MailBox = props => <div className="green">{props.message}</div>;

const Postman = props => (
  <div>
    <span style={{ color: "red" }}>
      Postman will just pass message to Mailbox.
    </span>
    <MailBox message={props.message} />
  </div>
);

class PostOffice extends Component {
  state = {
    message: "This message will go from Postman to MailBox. OK."
  };
  render() {
    return (
      <div className="red">
        {this.state.message}
        <Postman message={this.state.message} />
      </div>
    );
  }
}

const App = () => (
  <div>
    <PostOffice />
  </div>
);

render(<App />, document.getElementById("root"));
