import axios from "axios";
import { signupApi } from "../../api/signup/signupApi";


export const signupUser= (userData) => async (dispatch) => {
  try {
    dispatch({
      type:"SET_LOADER",payload:true
    })
    const response = await axios.post(
      signupApi,
      userData,
      {
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    
    if (response.success) {
      localStorage.setItem("data",JSON.stringify(response.data.data));
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
  } catch {
    dispatch({
      type:"SET_LOADER",payload:false
    })
    dispatch({
      type: "SET_SNACKBAR_MESSAGE",
      payload: { message: "Retry after sometime!", endColor: "#f17d73",startColor:"#ffe2e0" },
    });
  }
};
