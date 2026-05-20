

import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import type { RootState, AppDispatch } from "../redux/store";
import { getRecipeById, searchRecipes } from "../services/recipeApi";
import { setRecipe } from "../redux/recipeSlice";
import type { Recipe } from "../redux/recipeSlice";
import temporaryState from "../components/functionState";


//default carts 
const DefaultCode = [647563, 665378, 633101, 1096185, 661740];

//state search by id 
export function useRecipeId(id?: string) {

    
    const dispatch = useDispatch<AppDispatch>();

    //get stored recipes
    const recipes = useSelector(
        (state: RootState) => state.recipe.recipes
    );

    //check state api
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");


    //find right recipe
    const recipe = recipes.find(
        (item) => item.id === Number(id),
    );

    useEffect(() => {

        // if already exist return
        if (recipe) return;
        if (!id) return;

        // else check id, if you don't have do the fetch 
        const isDefault = DefaultCode.includes(Number(id));

        if (!isDefault) return;

        const fetchRecipe = async () => {
    
            try {
    
                setLoading(true);
                setError("");
    
                const myId = id?.toString();
                if (!myId) return;
                    
                const response = await getRecipeById(myId);
                // get info
                const result: Recipe = response.data;
                // add in the store 
                dispatch(
                    setRecipe([...recipes, result])
                );
    
            } catch {
                //popup error
                temporaryState<string>(setError, "Search failed, try again", "");
            } finally {
                //stop popUp loading
                setLoading(false);
            }
        };
        fetchRecipe();

    }, [id, recipe, dispatch, recipes]);

    return {
        recipe,
        loading,
        error
    }
}







//state for the search by parameters

export type RecipeSearchParams = Parameters<typeof searchRecipes>[0];


export function useRecipesSearch() {
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [empty, setEmpty] = useState(false);

    const runSearch = async (params: RecipeSearchParams) => {
        try {
            setLoading(true);
            setError("");
            setEmpty(false);

            const results = await searchRecipes(params);

            if (!results || results.length === 0) {
                setEmpty(true);
                return [];
            }

            dispatch(setRecipe(results));
            return results;

        } catch {
            setError("Search failed, try again");
            return [];
        } finally {
            setLoading(false);
        }
    };

    // wrapper 1: search bar
    const searchByName = (name: string) => {
        return runSearch({ recipeName: name });
    };

    // wrapper 2: filters
    const searchWithFilters = (filters: {
        ingredient?: string;
        time?: string;
        kCalories?: string;
        vitamin?: string;
    }) => {
        return runSearch({
            ingridient: filters.ingredient,
            time: filters.time,
            kCalories: filters.kCalories,
            vitamin: filters.vitamin
        });
    };

    return {
        searchByName,
        searchWithFilters,
        loading,
        error,
        empty
    };
}