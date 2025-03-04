export const popUpAction=(img)=>async (dispatch)=>{
    dispatch({ type: "SET_PROFILE_PICTURE", payload: img })
}