"use client"
import { createSlice } from "@reduxjs/toolkit";


type EditDataType = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
        clearEditData: (state) => {
            state.editData = null;
        },
    },
})

export const { setEditData, clearEditData } = editDataSlice.actions
export default editDataSlice.reducer;