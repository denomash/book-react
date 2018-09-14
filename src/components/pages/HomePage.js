import React from "react";
// import { Link } from "react-router-dom";
// import { connect } from "react-redux";
// import PropTypes from "prop-types";
// import * as actions from "../../actions/auth";
import Menu from "../assets/Menu";
import Body from "../assets/Body";
import Header from "../headerComponent/Header";

const HomePage = () => (
  <div>
    <Header />
    {/* <div>
      {isAuthenticated ? (
        <button onClick={() => logout()}>Logout</button>
      ) : (
        <div>
          <Link to="/login">Login</Link> or <Link to="/signup">Sign Up</Link>
        </div>
      )}
    </div> */}
    <div>
      <Body />
      <Menu />
    </div>
  </div>
);

// function mapStateToProps(state) {
//   return {
//     isAuthenticated: !!state.user.token
//   };
// }

export default HomePage;
