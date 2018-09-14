import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Message } from "semantic-ui-react";
import ForgotPasswordForm from "../forms/ForgotPasswordForm";
import { resetPasswordRequest } from "../../actions/auth";
import Header from "../headerComponent/Header";

class ForgotPasswordPage extends React.Component {
  state = {
    success: false,
  };

  submit = data =>
    this.props
      .resetPasswordRequest(data)
      .then(() => this.setState({ success: true }));

  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
        <h2>Reset your password</h2>
        {this.state.success ? (
          <Message>Email has been sent.</Message>
        ) : (
          <div className="ui raised very padded text container segment">
            <ForgotPasswordForm submit={this.submit} />
          </div>
        )}
      </div>
    );
  }
}

ForgotPasswordPage.propTypes = {
  resetPasswordRequest: PropTypes.func.isRequired,
};

export default connect(null, { resetPasswordRequest })(ForgotPasswordPage);
