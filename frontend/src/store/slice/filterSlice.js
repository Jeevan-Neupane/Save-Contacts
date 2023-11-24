import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    view: 'list',
    order: ''
}


const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        changeView: (state, action) => {
            state.view = action.payload;
        },

    }
})

export default filterSlice.reducer;

export const { changeView } = filterSlice.actions;