import './styles/FormComponent.scss'
import { useState } from 'react';

export const FormComponents = ({ formData,onChange,value}) => {
  const [Focused, setFocused] = useState(false);
  switch (formData.inputType) {
    case "movePlaceholderUp":
      return (
          <div className="input-container">
            <input
              name={formData.name}
              type={formData.type}
              required
              value={value}
              className={`input-field ${Focused ? "focused" : ""}`}
              onFocus={() => setFocused(true)}
              onBlur={(e) => setFocused(e.target.value !== "")}
              onChange={onChange}
            />
            <div className="placeholder">{formData.placeholder}</div>
          </div>
      )
      case "text":
        return (
                <div className="input-container">
                    <input
                    className='input-field'
                    name={formData.name}
                    type={formData.type}
                    required
                    placeholder={formData.placeholder}
                    onChange={onChange}
                    />
                </div>
        )
        case 'dropdown':
            return (
                    <div className="input-container">
                        <select className='input-field' onChange={onChange} name={formData.name} required>
                            {/* <option>
                                gigi
                            </option>
                            <option>
                                popo
                            </option> */}
                        </select>
                    </div>
            )
            default:
                return (
                    <input/>
                )
  }
};
