import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    scroll:0
};

export const Slice = createSlice({
    name: "portfolio",
    initialState,

    reducers:{
        changeScroll: (state,action)=>{
            state.scroll = action.payload
        }
    }
})

export const {
    changeScroll,
} = Slice.actions;

export default Slice.reducer