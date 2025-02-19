import "./styles/SubmitButton.scss";

function SubmitButton({ text,type}) {
  return <button type={type}>{text}</button>;
}

export default SubmitButton;
