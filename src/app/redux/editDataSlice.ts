"use client"
import { createSlice } from "@reduxjs/toolkit";


type EditDataType = {
    editData : any;
}

const initialState: EditDataType = {
    editData : null
}

const editDataSlice = createSlice({
    name: "editData",
    initialState,
    reducers: {
        setEditData: (state, action) => {
            state.editData = action.payload;
        },
        clearEditData: (state, action) => {
            state.editData = null;
        },
    },
})

export const { setEditData, clearEditData } = editDataSlice.actions
export default editDataSlice.reducer;