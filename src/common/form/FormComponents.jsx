import "./styles/FormComponent.scss";
import { useState } from "react";
import PropTypes from "prop-types";

export const FormComponents = ({ formData, onChange }) => {
  const [Focused, setFocused] = useState(false);

  switch (formData.inputType) {
    case "textup":
      return (
        <div className="input-container">
          <input
            name={formData.name}
            type={formData.type}
            required
            className={`input-field ${Focused ? "focused" : ""}`}
            onFocus={() => setFocused(true)}
            onBlur={(e) => setFocused(e.target.value !== "")}
            onChange={onChange}
          />
          <div className="placeholder">{formData.placeholder}</div>
        </div>
      );
    case "text":
      return (
        <div className="input-container">
          <input
            name={formData.name}
            type={formData.type}
            required
            placeholder={formData.placeholder}
            onChange={onChange}
          />
        </div>
      );
    case "dropdown":
      return (
        <div className="input-container">
          <select onChange={onChange} name={formData.name} required>
            <option value="gigi">gigi</option>
            <option value="popo">popo</option>
          </select>
        </div>
      );
    default:
      return <input />;
  }
};

// ✅ Props validation
FormComponents.propTypes = {
  formData: PropTypes.shape({
    inputType: PropTypes.oneOf(["textup", "text", "dropdown"]).isRequired, // Ensures valid input types
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
  }).isRequired,
  onChange: PropTypes.func.isRequired, // Ensures it's a function
};

// ✅ Default props (optional)
FormComponents.defaultProps = {
  formData: {
    placeholder: "",
  },
};

export default FormComponents;
