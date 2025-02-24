export const isLoading=(value)=>async (dispatch)=>{
    console.log(value);
    dispatch({type:"SET_LOADER",payload:value});
}
