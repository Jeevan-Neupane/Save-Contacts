import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    token: null,
    user: null
}


const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;


        },
        setTokenLocalStorage: (state, action) => {
            localStorage.setItem("token", JSON.stringify(action.payload));


        },
        removeToken: (state, action) => {
            state.token = null;

        },
        removeTokenLocalStorage: (state, action) => {
            localStorage.removeItem("token");


        },
        setUser: (state, action) => {
            state.user = action.payload;
        },
        removeUser: (state, action) => {
            state.user = null;
        }


    }
})


export default userSlice.reducer;
export const { setToken, setTokenLocalStorage, removeToken, removeTokenLocalStorage, setUser, removeUser } = userSlice.actions;