import { AllRoutes } from "./routes/AllRoutes";
import { Snackbar, Alert } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import LanguageSwitcher from "./languageSwitcher/LanguageSwitcher";
function App() {
  const dispatch = useDispatch();
  const { snackbarMessage } = useSelector(state => state.signup);
  const { severity } = useSelector(state => state.signup);
  const handleClose = () => {
    severity === "success"
      ? dispatch({
          type: "SET_SNACKBAR_SUCCESS_MESSAGE",
          payload: { message: "", severity: '' },
        })
      : dispatch({
          type: "SET_SNACKBAR_ERROR_MESSAGE",
          payload: { message: "", severity: '' },
        });
  };
  return (
    <div>
      <LanguageSwitcher />
      <AllRoutes />
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={snackbarMessage !== ""}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={severity}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default App;
