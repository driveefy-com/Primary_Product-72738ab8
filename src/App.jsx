import { AllRoutes } from "./routes/AllRoutes";
import { useDispatch, useSelector } from "react-redux";
import CustomSnackbar from "./common/customSnackbar/customSnackbar";
import LanguageSwitcher from "./common/languageSwitcher/LanguageSwitcher";
import Loader from "./common/loader/Loader";
import { isLoading } from "./redux/actions/loaderAction";
import { useEffect } from "react";
import "./App.css";
function App() {
  const dispatch = useDispatch();
  const { snackbarMessage = "", startColor = "", endColor = "" } = useSelector(state => state.login_signup || {});
  const { loading } = useSelector(state => state.loader || false);

  const handleClose = () => {
    dispatch({
      type: "SET_SNACKBAR_MESSAGE",
      payload: { message: "", startColor: "", endColor: "" },
    });
  };

  useEffect(() => {
    dispatch(isLoading(true));
    const timer = setTimeout(() => {
      dispatch(isLoading(false));
    }, 2000);
    return () => clearTimeout(timer);
  }, [dispatch]);

  if (loading) return <Loader />;

  return (
    <div>
      <div className="language-switcher-container">
        <LanguageSwitcher />
      </div>
      <AllRoutes/>
      <CustomSnackbar open={snackbarMessage !== ""} onClose={handleClose} message={snackbarMessage} startColor={startColor} endColor={endColor} />
    </div>
  );
}

export default App;
