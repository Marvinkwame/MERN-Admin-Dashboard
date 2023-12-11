import { configureStore } from "@reduxjs/toolkit"
import globalReducer from "../feature/globalSlice"


export const store = configureStore({
    reducer: {
        global: globalReducer,
    }
})