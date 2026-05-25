

//Last part of recipe page

import type { Recipe, Ingredient, InstructionStep } from "../redux/recipeSlice";

type SecondBigBlockProps = {
    recipe: Recipe
};



export default function SecondBigBlock({ recipe }: SecondBigBlockProps) {
    return (
        <>
        <div className="secondPart">
            <div className="leftGreen">
            <div className="left">
                <h4>INGRIDIENTS:</h4>
                <img src={`${import.meta.env.BASE_URL}images/food.webp`} alt="vegetable Ingridients" />

                <ul>
                {recipe.extendedIngredients?.map((ingridient: Ingredient) => (
                    <li key={ingridient.id}>{ingridient.original}</li>
                ))}
                </ul>
            </div>
            </div>
                
                <div className="right">
                    <h2>PREPARATIONS:</h2>
                    <ol>
                        {recipe.analyzedInstructions?.[0]?.steps?.map((step: InstructionStep) => (
                            <li key={step.number}>{step.step}</li>
                        ))}
                    </ol>
            </div>
        </div>
        </>
    );
}