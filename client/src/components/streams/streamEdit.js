import React from "react";
import { editStream, fetchIndividualStream } from "../../actions";
import { connect } from "react-redux";
import StreamForm from "../streamForm";
import _ from "lodash";

class streamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchIndividualStream(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    this.props.editStream(this.props.stream.id, formValues);
  };

  render() {
    if (!this.props.stream) return <div>Loading...</div>;

    return (
      <StreamForm
        onSubmit={this.onSubmit}
        initialValues={_.pick(this.props.stream, "title", "description")}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const streamId = ownProps.match.params.id;
  const streams = state.streams;

  return {
    stream: streams[streamId],
  };
};
export default connect(mapStateToProps, {
  editStream,
  fetchIndividualStream,
})(streamEdit);
