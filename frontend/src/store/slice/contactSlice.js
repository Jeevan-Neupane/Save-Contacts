import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    all_contacts: [],
    edit_contacts: null,

}


const contactSlice = createSlice({
    name: "contacts",
    initialState,
    reducers: {
        addContacts: (state, action) => {
            state.all_contacts = [...action.payload];
        },

        addContact: (state, action) => {

            state.all_contacts = [action.payload, ...state.all_contacts]

        },
        addEditContact: (state, action) => {

        },
        removeEditContact: (state, action) => {

        },

        removeContact: (state, action) => {

        }
    }
})

export default contactSlice.reducer;
export const { addContacts, addContact } = contactSlice.actions;