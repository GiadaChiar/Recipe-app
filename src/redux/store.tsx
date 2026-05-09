// creation global store

// all the slice in the database

import { configureStore } from "@reduxjs/toolkit";
import recipeReducer from "./recipeSlice";




export const apiKey = "ac889ed08a0642c99d7655ba1ee3fee8";

export const store = configureStore({
    reducer: {
        recipe: recipeReducer,
    },
});