import { createSlice } from "@reduxjs/toolkit";


// standard info recipes 
const initialState = {
    selectedRecipe: null,
};


const recipeSlice = createSlice({
    name: "recipe",
    initialState,
    // change state
    reducers: {
        selectedRecipe: (state, action) => {
        state.selectedRecipe = action.payload;
        },
    },
});

export const { selectedRecipe } = recipeSlice.actions;

export default recipeSlice.reducer;
