// import axios from "axios";

// export const loginUser = (userData) => async (dispatch) => {
//   try {
//     dispatch({ type: "LOGIN_REQUEST" });
//     const response = await axios.post(
//       `${import.meta.env.VITE_BACKEND_URL}/api/v1/contactus/subscribe`,
//       userData,
//       {
//         headers: {
//           "Content-type": "application/json",
//         },
//       }
//     );

//     if (response.status === 201) {
//       dispatch({ type: "LOGIN_SUCCESS" });
//       dispatch({
//         type: "SET_SNACKBAR_SUCCESS_MESSAGE",
//         payload: {
//           message: "Thank you for Subscribing us",
//           severity: "success",
//         },
//       });
//     }
//   } catch {
//     dispatch({
//       type: "LOGIN_FAILURE",
//     });
//     dispatch({
//       type: "SET_SNACKBAR_ERROR_MESSAGE",
//       payload: { message: "Retry after sometime!", severity: "error" },
//     });
//   }
// };
