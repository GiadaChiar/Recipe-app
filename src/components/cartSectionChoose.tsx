// chooose which recipe deck if fake one or the real one after the fetch

import { useSelector } from "react-redux";
import FakeCarts from "./fakeCarts";
import RealCart from "./realCart";



type FakeCardsProps = {
  positions: string[];
};


export default function RecipeSection({ positions }: FakeCardsProps) {
  const recipes = useSelector((state: any) => state.recipe.recipes);

  //const positions = ["number1", "number2", "number3", "number4", "number5"];

    return (
        <>
        {recipes.length === 0 ? (
            <FakeCarts positions={positions} />
        ) : (
            recipes.map((recipe: any, index: any) => (
            <RealCart
                key={recipe.id}
                code={recipe.id}
                extraClass={positions[index]}
                foodImage={recipe.image}
                nameText={recipe.title}
                timeText={recipe.readyInMinutes}
                healthy={recipe.healthScore}
            />
            ))
        )}
        </>
    );
}