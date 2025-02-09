import PropTypes from "prop-types";
import "./styles/SubmitButton.scss";

function SubmitButton({ text, type }) {
  return <button type={type}>{text}</button>;
}

// Props validation
SubmitButton.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["button", "submit", "reset"]), // Ensures it's a valid button type
};

// Default props (optional, in case no type is passed)
SubmitButton.defaultProps = {
  type: "button",
};

export default SubmitButton;
