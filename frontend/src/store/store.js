import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userSlice from "./slice/userSlice";
import { api } from "./api/api";
import contactSlice from "./slice/contactSlice";
import filterSlice from "./slice/filterSlice";



const store = configureStore({
    reducer: {
        user: userSlice,
        contacts: contactSlice,
        filter: filterSlice,
        [api.reducerPath]: api.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
})


export default store;
export * from "./slice/userSlice"
export * from "./slice/contactSlice"
export * from "./slice/filterSlice"
export * from "./api/api"



