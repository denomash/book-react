import React from "react";
import propTypes from "prop-types";

const InlineErrors = ({ text }) => (
  <span style={{ color: "#ae5658" }}>{text}</span>
);

InlineErrors.propTypes = {
  text: propTypes.string.isRequired,
};
export default InlineErrors;
