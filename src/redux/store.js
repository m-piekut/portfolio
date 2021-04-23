import { configureStore } from "@reduxjs/toolkit";
import languageReducer from './slices/LanguageSlice'
export default configureStore({
    reducer: {
        language: languageReducer,
    },
})