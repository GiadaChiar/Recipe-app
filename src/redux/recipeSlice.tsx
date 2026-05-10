import { createSlice } from "@reduxjs/toolkit";


// standard info recipes 
const initialState = {
    recipes: [],
};


const recipeSlice = createSlice({
    name: "recipe",
    initialState,
    // change state
    reducers: {
        setRecipe: (state, action) => {
        state.recipes = action.payload;
        },
    },
});

export const { setRecipe } = recipeSlice.actions;

export default recipeSlice.reducer;
