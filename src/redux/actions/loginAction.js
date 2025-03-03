import axios from "axios";
import { isLoading } from "./loaderAction";
<<<<<<< HEAD
import { useNavigate } from "react-router-dom";
=======


>>>>>>> 8af0768aa0aa989613cdd477a02086805c862a58
export const loginUser = (userData) => async (dispatch) => {
  // const Navigate = useNavigate();
  try {
    console.log(userData);
    dispatch({
      type: "SET_LOADER",
      payload: true,
    });
    // dispatch({ type: "LOGIN_REQUEST" });
    const response = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/api/v1/authentication/login`,
      userData,
      {
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    console.log(response.data);

    if (response.data.success) {
      localStorage.setItem("data", JSON.stringify(response.data.data));
      dispatch({
        type: "SET_SNACKBAR_MESSAGE",
        payload: {
          message: response.data.message,
          endColor: "#acffa5",
          startColor: "#effeed",
        },
      });
      dispatch({
        type: "SET_LOADER",
        payload: false,
      });
      dispatch({type:"SET_NAVIGATE_ORGANIZATION",payload:true});
    }
  } catch {
    // dispatch({
    //   type: "LOGIN_FAILURE",
    // });
    // console.log('hh');
    dispatch({
      type: "SET_LOADER",
      payload: false,
    });
    dispatch({
      type: "SET_SNACKBAR_MESSAGE",
      payload: {
        message: "Retry after sometime!",
        endColor: "#f17d73",
        startColor: "#ffe2e0",
      },
    });
  }
};
