import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
  <div className="ui large menu">
    <div className="item">
      <Link to="/">Home</Link>
    </div>
    <a className="item">Products</a>
    <div className="right menu">
      <div className="ui dropdown item">
        Books <i className="dropdown icon" />
        <div className="menu">
          <a className="item">Educational books</a>
          <a className="item">Motivational books</a>
          <a className="item">Romantic books</a>
        </div>
      </div>
      <div className="item">
        <div>
          <Link to="/login">Login</Link>
        </div>
      </div>
      <div className="item">
        <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  </div>
);

export default Footer;
