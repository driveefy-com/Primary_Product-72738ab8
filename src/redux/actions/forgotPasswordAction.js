import axios from "axios";
import { forgotPasswordApi } from "../../api/forgotPassword/forgotPasswordApi";

export const forgot = (userData) => async (dispatch) => {
  try {
    dispatch({
      type:"SET_LOADER",payload:true
    })
    const response = await axios.get(
      forgotPasswordApi,
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
