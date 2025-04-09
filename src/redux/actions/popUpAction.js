export const previewImage=(img)=>async (dispatch)=>{
    dispatch({ type: "PREVIEW_PROFILE_PICTURE", payload: img })
}

export const uploadImage=(img)=>async (dispatch)=>{
    dispatch({type:"SET_PROFILE_PICTURE",payload:img})
}