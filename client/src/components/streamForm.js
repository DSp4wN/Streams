import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamForm extends React.Component {
  renderError = (touched, error) => {
    if (touched && error)
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
  };

  renderInput = ({ input, label, meta: { touched, error } }) => {
    const className = `field ${touched && error ? "error" : ""}`;

    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} />
        {this.renderError(touched, error)}
      </div>
    );
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.props.onSubmit)}
        className="ui form error"
      >
        <Field name="title" component={this.renderInput} label="Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Description"
        />
        <button type="submit" className="ui button primary">
          Submit
        </button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const error = {};
  if (!formValues.title) error.title = "Enter a title";
  if (!formValues.description) error.description = "Enter a description";
  return error;
};

export default reduxForm({
  form: "streamForm",
  validate,
})(StreamForm);
