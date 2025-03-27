import "./styles/SubmitButton.scss";

function SubmitButton({ text,type}) {
  return <button type={type} className="submit-button">{text}</button>;
}

export default SubmitButton;
