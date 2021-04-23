import { createSlice } from "@reduxjs/toolkit";

export const languageSlice = createSlice({
    name: 'language',
    initialState: {
        value: "PL"
    },
    reducers:{
        changeLanguage: (state, action) =>{
            state.value = action.payload
        }
    }
})
 export const {changeLanguage} = languageSlice.actions
export default languageSlice.reducer;