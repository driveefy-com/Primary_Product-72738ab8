import { AllRoutes } from './routes/AllRoutes'
import { Snackbar,Alert } from '@mui/material';
import {useDispatch,useSelector} from 'react-redux';
import LanguageSwitcher from './languageSwitcher/LanguageSwitcher';
function App() {
  const dispatch=useDispatch();
  const {snackbarMessage}= useSelector(state => state.demo);
  const {severity}=useSelector(state=>state.demo);
  const handleClose = () => {
    if(severity=='success'){
      dispatch({
        type:'SET_SNACKBAR_SUCCESS_MESSAGE',
        payload:{snackbarMessage:'',severity:''},
      })
    }
    else {
      dispatch({
        type:'SET_SNACKBAR_ERROR_MESSAGE',
        payload:{snackbarMessage:'',severity:''},
      })
    }
  };
  return (
    <div>
      <LanguageSwitcher/>
      <AllRoutes/>
      <Snackbar
          anchorOrigin={{ vertical: "top" , horizontal: "center"}}
          open={snackbarMessage !== ""}
          autoHideDuration={3000}
          onClose={handleClose}
        >
          <Alert
            onClose={handleClose}
            severity={severity} 
          >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  )
}

export default App
