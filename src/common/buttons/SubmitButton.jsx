import "./styles/SubmitButton.scss";

function SubmitButton({ text,type,onClick }) {
  return <button type={type} className="submit-button" onClick={onClick?onClick:''}>{text}</button>;
}

export default SubmitButton;
