//get recipe by id (code), from redux

//get id
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { FirstBigBlock } from "./FirstPartRecipe";
import SecondBigBlock from "../components/SecondPartRecipe"



export default function RecipePage() {
    
    const { id } = useParams();

    //get recipe from redux

    const recipes = useSelector((state: any) => state.recipe.recipes);

    console.log(recipes)
    //find right recipe
    const recipe = recipes.find((item: any) => item.id === Number(id));

    if (!recipe) {
        return<p>RICETTA NON TROVATA</p>
    }

    return (
        <>
            
                <FirstBigBlock recipe={recipe} />
                <SecondBigBlock recipe={recipe} />
        
        </>
    );
}

