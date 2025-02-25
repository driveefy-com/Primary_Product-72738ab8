import axios from "axios";

export const forgot = (userData) => async (dispatch) => {
  try {
    console.log(userData);
    dispatch({
      type:"SET_LOADER",payload:true
    })
    // dispatch({ type: "LOGIN_REQUEST" });
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
    console.log(response.data);
    if (response.data.success) {
    //   localStorage.setItem("data",JSON.stringify(response.data));
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
    // dispatch({
    //   type: "LOGIN_FAILURE",
    // });
    // console.log('hh');
    dispatch({
      type:"SET_LOADER",payload:false
    })
    dispatch({
      type: "SET_SNACKBAR_MESSAGE",
      payload: { message:error.message, endColor: "#f17d73",startColor:"#ffe2e0" },
    });
  }
};
