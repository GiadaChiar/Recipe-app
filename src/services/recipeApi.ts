//Api services
import axios from "axios";
const apiKey = import.meta.env.VITE_API_KEY;


/*
export const searchRecipes = async(query: string) => {

    const res = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?diet=vegetarian&query=${query}&addRecipeInformation=true&instructionsRequired=true&fillIngredients=true&nutrition=true&number=5&apiKey=${apiKey}`,
    );

    return res.data.results;
}

*/



export const searchRecipes = async({
    recipeName,
    ingridient,
    time,
    kCalories,
    vitamin
}: {
    recipeName?: string;
    ingridient?: string;
    time?: string;
    kCalories?: string;
    vitamin?: string;
    }) => {
    
    if (
        recipeName === "" &&
        ingridient === "" &&
        time === "" &&
        kCalories === "" &&
        vitamin === ""
    ) {
        return;
    }

    const params = new URLSearchParams();

    if (recipeName) {
        params.append("query", recipeName);
    }

    if (ingridient) {
        params.append("includeIngredients", ingridient);
    }

    if (kCalories) {
        params.append("maxCalories", kCalories);
    }

    if (time) {
        params.append("maxReadyTime", time);
    }

    if (vitamin) {
        params.append(`minVitamin${vitamin}`, "500");
    }


    //default params 
    params.append("diet", "vegetarian");
    params.append("nutrition", "true");
    params.append("addRecipeInformation", "true");
    params.append("fillIngredients", "true");
    params.append("instructionsRequired", "true");
    params.append("number", "5");
    params.append("apiKey", apiKey);
    
    const res = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?${params.toString()}`)
    const results = res.data.results;
    console.log(results);
    return results;
}

/*

export const getRecipeById = async (id: string) => {
    
    
    const response = await axios.get(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`
    );

    console.log(response);
    return response;
}*/



export const getRecipeById = async (id: string) => {


    const response = await axios.get(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`
    );

    console.log(response);
    return response;
}



/*




try {

    setLoading(true);
    setError("");

    const params = new URLSearchParams();
    params.append("diet", "vegetarian");

    if (getInput) {
        params.append("includeIngredients", getInput);
    }

    if (getKcal) {
        params.append("maxCalories", getKcal);
    }

    if (getTime) {
        params.append("maxReadyTime", getTime);
    }

    if (getVitamin) {
        params.append(`minVitamin${getVitamin}`, "500");
    }

    params.append("addRecipeInformation", "true");
    params.append("fillIngredients", "true");
    params.append("instructionsRequired", "true");
    params.append("number", "5");
    params.append("apiKey", apiKey);

    const response = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?${params.toString()}`
    );

    const results = response.data.results;

    if (results.length === 0) {
        temporaryState(setEmpty, true, false);
        return;
    }
    dispatch(setRecipe(results));

} catch {
    temporaryState<string>(setError, "Search failed, try again", "");
} finally {
    setLoading(false);
}
    };*/