import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import LoginForm from "../forms/LoginForm";
import { login } from "../../actions/auth";
import Header from "../headerComponent/Header";

class LoginPage extends React.Component {
  submit = data =>
    this.props.login(data).then(() => this.props.history.push("/dashboard"));
  render() {
    return (
      <div>
        <div>
          <Header />
        </div>

        <div className="ui raised very padded text container segment">
          <h4 className="ui horizontal divider header">
            <i className="tag icon" />
            Login here
          </h4>
          <LoginForm submit={this.submit} />
          <Link to="/forgot_password">Forgot password</Link>
        </div>
      </div>
    );
  }
}

LoginPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  login: PropTypes.func.isRequired,
};

export default connect(null, { login })(LoginPage);
