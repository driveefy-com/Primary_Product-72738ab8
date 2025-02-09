import axios from "axios";


export const signupUser= (userData) => async (dispatch) => {
  try {
    dispatch({type: "SIGNUP_REQUEST"});
    const response = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/api/v1/contactus/subscribe`,
      userData,
      {
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    console.log(response);
    
    if (response.status === 201) {
      dispatch({ type: 'SIGNUP_SUCCESS' });
      dispatch({
        type: "SET_SNACKBAR_SUCCESS_MESSAGE",
        payload: {message:"Thank you for Subscribing us",severity:'success'}
      });
    }
  } catch (error) {
    dispatch({
      type: "SIGNUP_FAILURE",
    //   payload: error.message,
    });    
    if(error.status===400){
    dispatch({
      type: "SET_SNACKBAR_ERROR_MESSAGE",
      payload:{message:"You are already subscribed!",severity:'error'},
    });
  }
  else{
    dispatch({
      type: "SET_SNACKBAR_ERROR_MESSAGE",
      payload:{message:"Retry after sometime!",severity:'error'}
    });
  }
  }
};
