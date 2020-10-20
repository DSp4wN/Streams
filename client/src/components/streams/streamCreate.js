import React from "react";
import { createStream } from "../../actions";
import StreamForm from "../streamForm";
import { connect } from "react-redux";

class StreamCreate extends React.Component {
  onSubmit = (formValues) => {
    this.props.createStream(formValues);
  };

  render() {
    return <StreamForm onSubmit={this.onSubmit} />;
  }
}

export default connect(null, { createStream })(StreamCreate);
