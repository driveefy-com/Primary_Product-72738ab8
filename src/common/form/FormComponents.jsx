import './styles/FormComponent.scss'
import { useState } from 'react';

export const FormComponents = ({ formData }) => {
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
            />
            <div className="placeholder">{formData.placeholder}</div>
          </div>
      )
      case 'text':
        return (
                <div className="input-container">
                    <input
                    name={formData.name}
                    type={formData.type}
                    required
                    placeholder={formData.placeholder}
                    />
                </div>
        )
        case 'dropdown':
            return (
                
                    <div className="input-container">
                        <select name={formData.name} required>
                            <option>
                                gigi
                            </option>
                            <option>
                                popo
                            </option>
                        </select>
                    </div>
            )
            default:
                return (
                    <input/>
                )
  }
};
