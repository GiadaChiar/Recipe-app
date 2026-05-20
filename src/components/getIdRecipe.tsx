//get standard recipes by id 

import { useParams } from "react-router-dom";
import { FirstBigBlock } from "./FirstPartRecipe";
import SecondBigBlock from "../components/SecondPartRecipe"
import { useRecipeId } from "../services/checkStates";
import { StatusPopUp } from "../components/statusPopUp";

//get id recipes if is a default Cart--> get date by fetch 
export default function RecipePage() {

    const { id } = useParams();
    const { recipe, loading, error } = useRecipeId(id);

    if (!recipe) {
        return <p>RECIPE NOT FOUND</p>;
    }


    return (
        <>  <StatusPopUp
            loading={loading}
            error={error}
        />
            <FirstBigBlock recipe={recipe} />
            <SecondBigBlock recipe={recipe} />
        </>
    );
}