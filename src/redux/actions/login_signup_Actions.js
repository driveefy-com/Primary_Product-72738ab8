import axios from "axios";
import { forgotPasswordApi, resetPasswordApi, userOrganizationApi, verifyEmailApi } from "../../api/login_signup/login_signup";
import { loginApi } from "../../api/login_signup/login_signup";
import { signupApi } from "../../api/login_signup/login_signup";
export const forgot = (userData) => async (dispatch) => {
  try {
    dispatch({
      type: "SET_LOADER", payload: true
    })
    const response = await axios.post(
      forgotPasswordApi,
      userData,
      {
        headers: {
          "Content-type": "application/json",
        }
      }
    );

    if (response.data.success) {
      dispatch({
        type: "SET_SNACKBAR_MESSAGE",
        payload: {
          message: response.data.message,
          endColor: "#acffa5",
          startColor: "#effeed"
        },
      });
      dispatch({
        type: "SET_LOADER", payload: false
      })
      dispatch({ type: "SET_NAVIGATE_CHECKEMAIL", payload: true });
    }
  } catch (error) {
    dispatch({
      type: "SET_LOADER", payload: false
    })
    dispatch({
      type: "SET_SNACKBAR_MESSAGE",
      payload: { message: error.response.data.error.explanation, endColor: "#f17d73", startColor: "#ffe2e0" },
    });

  }
};

export const loginUser = (userData) => async (dispatch) => {
  try {
    dispatch({
      type: "SET_LOADER",
      payload: true,
    });
    const response = await axios.post(
      loginApi,
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
      dispatch({ type: "SET_NAVIGATE_ORGANIZATION", payload: true });
    }
  } catch (error) {

    dispatch({
      type: "SET_LOADER",
      payload: false,
    });
    dispatch({
      type: "SET_SNACKBAR_MESSAGE",
      payload: {
        message: error.response.data.error.explanation,
        endColor: "#f17d73",
        startColor: "#ffe2e0",
      },
    });
  }
};


export const signupUser = (userData) => async (dispatch) => {
  try {
    dispatch({
      type: "SET_LOADER", payload: true
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

    if (response.data.success) {
      localStorage.setItem("data", JSON.stringify(response.data.data));
      dispatch({
        type: "SET_SNACKBAR_MESSAGE",
        payload: {
          message: response.data.message,
          endColor: "#acffa5",
          startColor: "#effeed"
        },
      });
      dispatch({
        type: "SET_LOADER", payload: false
      })
      dispatch({ type: "SET_NAVIGATE_VERIFICATION", payload: true });
    }
  } catch (error) {
    dispatch({
      type: "SET_LOADER", payload: false
    })
    dispatch({
      type: "SET_SNACKBAR_MESSAGE",
      payload: { message: error.message, endColor: "#f17d73", startColor: "#ffe2e0" },
    });
  }
};

export const resetPassword = (userData) => async (dispatch) => {
  try {
    console.log(userData);
    dispatch({
      type: "SET_LOADER",
      payload: true,
    });
    const response = await axios.post(
      resetPasswordApi,
      userData,
      {
        headers: {
          "Content-type": "application/json",
          
        },
        params: {
          resetPasswordToken: JSON.parse(localStorage.getItem("data")).token
        }
      }
    );
    if (response.data.success) {
      // localStorage.setItem("data", JSON.stringify(response.data.data));
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
      dispatch({ type: "SET_NAVIGATE_ORGANIZATION", payload: true });
    }
  } catch {
    dispatch({
      type: "SET_LOADER",
      payload: false,
    });
    dispatch({
      type: "SET_SNACKBAR_MESSAGE",
      payload: {
        message: error.message,
        endColor: "#f17d73",
        startColor: "#ffe2e0",
      },
    });
  }
};

export const verifyEmail = (userData) => async (dispatch) => {
  try {
    dispatch({
      type: "SET_LOADER",
      payload: true,
    });
    const response = await axios.get(
      verifyEmailApi,
      {userData},{
        headers: {
          "Content-type": "application/json",
        },
        params:{
          "token": JSON.parse(localStorage.getItem("data")).token
        }
      }
    );
    if (response.data.success) {
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
      dispatch({ type: "SET_NAVIGATE_ORGANIZATION", payload: true });
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


export const googleLogin = () => async (dispatch) => {
  try {
    dispatch({
      type: "SET_LOADER",
      payload: true,
    });
    // const response = await axios.get(
    //   googleLoginApi,
    //   {
    //     withCredentials: true,
    //   }
    // );
    // window.location.href = "http://localhost:5001/api/v1/authentication/auth/google";
    fetch('http://localhost:5001/api/v1/authentication/auth/google', {
      method: 'GET',
      credentials: 'include'
      });
    // if (response.data.success) {  
    //   dispatch({
    //     type: "SET_SNACKBAR_MESSAGE",
    //     payload: {
    //       message: response.data.message,
    //       endColor: "#acffa5",
    //       startColor: "#effeed",
    //     },
    //   });
    //   dispatch({
    //     type: "SET_LOADER",
    //     payload: false,
    //   });
    //   dispatch({ type: "SET_NAVIGATE_ORGANIZATION", payload: true });
    // }
  } catch (error) {
    console.log(error);
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

export const userOrganization = (userData) => async (dispatch) => {
  try {
    console.log(userData);
    
    dispatch({
      type: "SET_LOADER",
      payload: true,
    });
    const response = await axios.post(userOrganizationApi,
      {userData},
      {
        headers: {
          "Content-type": "application/json",
          "Authorization":JSON.parse(localStorage.getItem("data")).token,
        }
      }
    );
    console.log(response);
    if (response.data.success) {
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
      dispatch({ type: "SET_NAVIGATE_ORGANIZATION", payload: true });
    }
  } catch (error){
    console.log(error);
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