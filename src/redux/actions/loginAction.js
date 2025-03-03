import axios from "axios";

export const loginUser = (userData) => async (dispatch) => {
  try {
    dispatch({
      type: "SET_LOADER",
      payload: true,
    });
    const response = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/api/v1/authentication/login`,
      userData,
      {
        headers: {
          "Content-type": "application/json",
        },
      }
    );

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
