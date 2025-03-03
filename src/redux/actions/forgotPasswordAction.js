import axios from "axios";

export const forgot = (userData) => async (dispatch) => {
  try {
    dispatch({
      type:"SET_LOADER",payload:true
    })
    const response = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/api/v1/authentication/forgetpassword`,
      userData,
      {
        headers: {
          "Content-type": "application/json",
        },
        query:{

        }
      }
    );
    if (response.data.success) {
      dispatch({
        type: "SET_SNACKBAR_MESSAGE",
        payload: {
          message:response.data.message,
          endColor: "#acffa5",
          startColor:"#effeed"
        },
      });
      dispatch({
        type:"SET_LOADER",payload:false
      })
    }
  } catch(error) {
    dispatch({
      type:"SET_LOADER",payload:false
    })
    dispatch({
      type: "SET_SNACKBAR_MESSAGE",
      payload: { message:error.message, endColor: "#f17d73",startColor:"#ffe2e0" },
    });
  }
};
