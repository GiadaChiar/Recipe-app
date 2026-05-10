import Recipe from '../pages/recipe';

//Second part


type SecondBigBlockProps = {
    recipe: any
};


/*
export default function SecondBigBlock({ recipe }: SecondBigBlockProps) {
    return (
        <>
        <div className="secondPart">
            <div className="leftGreen">
            <div className="left">
                <h4>INGRIDIENTS:</h4>
                <img src="/images/food.png" alt="vegetable Ingridients" />

                <ul>
                {recipe.extendedIngredients?.map((ingridient: any) => (
                    <li key={ingridient.id}>{ingridient.original}</li>
                ))}
                </ul>
            </div>
            </div>
                
                <div className="right">
                    <h2>PREPARATIONS:</h2>
                    <div
        dangerouslySetInnerHTML={{ __html: recipe.summary }}
    />
            </div>
        </div>
        </>
    );
}

*/


export default function SecondBigBlock({ recipe }: SecondBigBlockProps) {
    return (
        <>
        <div className="secondPart">
            <div className="leftGreen">
            <div className="left">
                <h4>INGRIDIENTS:</h4>
                <img src="/images/food.png" alt="vegetable Ingridients" />

                <ul>
                {recipe.extendedIngredients?.map((ingridient: any) => (
                    <li key={ingridient.id}>{ingridient.original}</li>
                ))}
                </ul>
            </div>
            </div>
                
                <div className="right">
                    <h2>PREPARATIONS:</h2>
                    <ol>
                        {recipe.analyzedInstructions?.[0]?.steps?.map((step: any) => (
                            <li key={step.number}>{step.step}</li>
                        ))}
                    </ol>
            </div>
        </div>
        </>
    );
}