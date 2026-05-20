//Api services
import axios from "axios";
const apiKey = import.meta.env.VITE_API_KEY;



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

    return results;
}


//search by id 
export const getRecipeById = async (id: string) => {


    const response = await axios.get(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`
    );

    return response;
}


