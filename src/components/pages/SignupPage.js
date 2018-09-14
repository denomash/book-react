import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import SignupForm from "../forms/SignupForm";
import { signup } from "../../actions/users";
import Header from "../headerComponent/Header";

class SignupPage extends React.Component {
  submit = data =>
    this.props.signup(data).then(() => this.props.history.push("/dashboard"));

  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
        <div className="ui raised very padded text container segment">
          <h4 className="ui horizontal divider header">
            <i className="tag icon" />
            Sign Up here
          </h4>
          <SignupForm submit={this.submit} />
        </div>
      </div>
    );
  }
}

SignupPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  signup: PropTypes.func.isRequired,
};

export default connect(null, { signup })(SignupPage);
