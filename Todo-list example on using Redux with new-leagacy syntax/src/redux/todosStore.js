import { configureStore } from "@reduxjs/toolkit";
import { todosReducer } from "./todoSlice";

 const todosStore = configureStore({
    reducer: {
        todos: todosReducer
    },
    devTools: process.env.NODE_ENV !== 'production',
});

export default todosStore;
