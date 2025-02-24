import axios from "axios";
import { isLoading } from "./loaderAction";

export const loginUser = (userData) => async (dispatch) => {
  try {
    dispatch({
      type:"SET_LOADER",payload:true
    })
    dispatch({ type: "LOGIN_REQUEST" });
    const response = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/api/v1/contactus/subscribe`,
      userData,
      {
        headers: {
          "Content-type": "application/json",
        },
      }
    );

    if (response.status === 201) {
      dispatch({ type: "LOGIN_SUCCESS" });
      dispatch({
        type: "SET_SNACKBAR_MESSAGE",
        payload: {
          message: "Thank you for Subscribing us",
          endColor: "#acffa5",
          startColor:"#effeed"
        },
      });
      dispatch({
        type:"SET_LOADER",payload:false
      })
    }
  } catch {
    dispatch({
      type: "LOGIN_FAILURE",
    });
    console.log('hh');
    dispatch({
      type:"SET_LOADER",payload:false
    })
    dispatch({
      type: "SET_SNACKBAR_MESSAGE",
      payload: { message: "Retry after sometime!", endColor: "#f17d73",startColor:"#ffe2e0" },
    });
  }
};
