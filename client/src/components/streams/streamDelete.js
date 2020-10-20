import React from "react";
import Modal from "../modal";
import history from "../../history";
import { connect } from "react-redux";
import { fetchIndividualStream, deleteStream } from "../../actions";
import { Link } from "react-router-dom";

class streamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchIndividualStream(this.props.match.params.id);
  }

  action = () => {
    return (
      <React.Fragment>
        <button
          onClick={() => this.props.deleteStream(this.props.match.params.id)}
          className="ui button negative"
        >
          Delete
        </button>
        <Link to="/" className="ui button">
          Cancel
        </Link>
      </React.Fragment>
    );
  };

  renderContent = () => {
    return `Are you sure you want to delete : ${
      this.props.stream ? this.props.stream.title : ""
    }`;
  };

  render() {
    if (!this.props.stream) return <div></div>;

    return (
      <Modal
        title="Delete Stream"
        content={this.renderContent()}
        action={this.action()}
        onDismiss={() => history.push("/")}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, {
  fetchIndividualStream,
  deleteStream,
})(streamDelete);
