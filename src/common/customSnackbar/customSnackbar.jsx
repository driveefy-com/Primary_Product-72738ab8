import { useEffect, useState } from "react";
import { Snackbar, Alert } from "@mui/material";
import "./styles/customSnackbar.scss";
import cross from "../../assets/icons/AvatarPageCrossIcon.svg";

const CustomSnackbar = ({ message, startColor, endColor, open, onClose }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let animationFrame;

    if (open) {
      setProgress(0);
      const startTime = performance.now();

      const animate = (currentTime) => {
        const elapsedTime = currentTime - startTime;
        const newProgress = Math.min((elapsedTime / 2500) * 100, 100); 

        setProgress(newProgress);

        if (newProgress < 100) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);
    }

    return () => cancelAnimationFrame(animationFrame);
  }, [open]);

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
        style={{
          background: `linear-gradient(to right, ${endColor} ${progress}%, ${startColor} ${progress}%)`,
        }}
      >
        <div className="snackbar-container">
          <p className="snackbar-dot">{message}</p>
          <img src={cross} alt="" className="snackbar-cross-icon" onClick={onClose} />
        </div>
      </Alert>
    </Snackbar>
  );
};

export default CustomSnackbar;
