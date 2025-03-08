import axios from "axios";
import { forgotPasswordApi, resetPasswordApi, verifyEmailApi } from "../../api/login_signup/login_signup";
import { loginApi } from "../../api/login_signup/login_signup";
import { signupApi } from "../../api/login_signup/login_signup";


export const forgot = (userData) => async (dispatch) => {
  console.log(userData.email);
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
        }
      }
    );
    console.log(userData.email);
    
    console.log(response);
    
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
    console.log(error.response);
    dispatch({
      type:"SET_LOADER",payload:false
    })
    dispatch({
      type: "SET_SNACKBAR_MESSAGE",
      payload: { message:error.response.data.errors[0].message, endColor: "#f17d73",startColor:"#ffe2e0" },
    });

  }
};

export const loginUser = (userData) => async (dispatch) => {  
  try {
    console.log(userData);
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
console.log(response);

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
  } catch(error) {
    console.log(error.response);
    
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
    console.log(response);
    
    if (response.data.success) {
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
  } catch(error) {
    console.log(error);
    dispatch({
      type:"SET_LOADER",payload:false
    })
    dispatch({
      type: "SET_SNACKBAR_MESSAGE",
      payload: { message: error.response.data.error.explanation, endColor: "#f17d73",startColor:"#ffe2e0" },
    });
  }
};

export const resetPassword = (userData) => async (dispatch) => { 
  const updatedUserData={...userData,'resetPasswordToken':JSON.parse(localStorage.getItem("data")).token}; 
  console.log(updatedUserData);
  try {
    dispatch({
      type: "SET_LOADER",
      payload: true,
    });
    const response = await axios.post(
      resetPasswordApi,
      updatedUserData,
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

export const verifyEmail = (userData) => async (dispatch) => { 
  console.log(userData);
  try {
    dispatch({
      type: "SET_LOADER",
      payload: true,
    });
    const response = await axios.get(
      verifyEmailApi,
      userData,
      {
        headers: {
          "Content-type": "application/json",
        },
        query:{
          token:JSON.parse(localStorage.setItem("data")).tokena
        }
      }
    );
    console.log(response);
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