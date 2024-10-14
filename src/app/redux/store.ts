"use client"

const { configureStore } = require("@reduxjs/toolkit");
import editDataReducer from "./editDataSlice"



const store = configureStore({
    reducer: {
        editData: editDataReducer
    }
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


export default store