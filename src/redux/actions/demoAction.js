import axios from "axios";


export const subscribe= (userEmail) => async (dispatch) => {
  try {
    dispatch({type: "SUBSCRIBE_REQUEST"});
    const response = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/api/v1/contactus/subscribe`,
      userEmail,
      {
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    
    if (response.status === 201) {
      dispatch({ type: 'SUBSCRIBE_SUCCESS' });
      dispatch({
        type: "SET_SNACKBAR_SUCCESS_MESSAGE",
        payload: {message:"Thank you for Subscribing us",severity:'success'}
      });
    }
  } catch (error) {
    dispatch({
      type: "SUBSCRIBE_FAILURE",
      payload: error.message,
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
