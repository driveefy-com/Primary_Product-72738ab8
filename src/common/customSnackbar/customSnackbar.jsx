import  { useEffect, useState } from "react";
import { Snackbar, Alert } from "@mui/material";
import "./styles/CustomSnackbar.scss"; 
import cross from "../../assets/icons/AvatarPageCrossIcon.svg";
const CustomSnackbar = ({ message,startColor,endColor,open,onClose}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if(open){
      setProgress(0);
      const interval = setInterval(() => {
        setProgress((prev) => Math.min(prev + 5, 100)); 
      }, 100);
      return () => clearInterval(interval);
}}, [open]);

  return (
    <Snackbar 
      open={open}
      autoHideDuration={3000}  
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      onClose={onClose}
    >
      <Alert
        severity="hidden"
        className="custom-snackbar"
        style={{ background: `linear-gradient(to right, ${endColor} ${progress}%, ${startColor} ${progress}%)` }}
      >
        <div className="snackbar-container">
        <p className="snackbar-dot" >
        {message}
        </p>
        <img src={cross} alt="" className="snackbar-cross-icon" onClick={onClose}/>
        </div>
      </Alert>
    </Snackbar>
  );
};

export default CustomSnackbar;
