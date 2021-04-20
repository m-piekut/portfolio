import { configureStore } from "@reduxjs/toolkit";
import sampleReducer from './slices/sampleSlice'
export default configureStore({
    reducer: {
        sample: sampleReducer,
    },
})