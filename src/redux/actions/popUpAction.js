export const popUpAction=(img)=>async (dispatch)=>{
    try{dispatch({ type: "SET_PROFILE_PICTURE", payload: img });}
    catch(error){console.log(error)}
}