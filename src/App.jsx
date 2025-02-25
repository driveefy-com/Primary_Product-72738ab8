import { AllRoutes } from "./routes/AllRoutes";
import { Snackbar, Alert } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import CustomSnackbar from "./common/customSnackbar/customSnackbar";
import LanguageSwitcher from "./common/languageSwitcher/LanguageSwitcher";
import Loader from "./common/loader/Loader";
import { isLoading } from "./redux/actions/loaderAction";
import { useEffect } from "react";
function App() {
  const dispatch = useDispatch();
  const { snackbarMessage } = useSelector(state => state.login);
  const { endColor } = useSelector(state => state.login);
  const {startColor}= useSelector(state=>state.login);
  // console.log(snackbarMessage,color);
  const {loading}=useSelector(state=>state.loader);
  // console.log(loading);
  const handleClose = () => {
      dispatch({
          type: "SET_SNACKBAR_MESSAGE",
          payload: { message: "", startColor:"",endColor:"" },
        })
  };
  useEffect(() => {
    dispatch(isLoading(true));
    setTimeout(() => {
      dispatch(isLoading(false));
    }, 2000);
  }, []);
  // if (loading) {
  //   return }

 if(loading)return <Loader/>;
  return (
    <div>
      <LanguageSwitcher />
      <AllRoutes />
      <CustomSnackbar open={snackbarMessage !== ''} onClose={handleClose} message={snackbarMessage} startColor={startColor} endColor={endColor} />
    </div>
  );
}

export default App;
