//default block top page Recipes 3 times used ( first section recipe page)
//image, description and value


type BlockRecipeProps = {
    classEl: string;
    icon: string;
    description: string;
    value: string;


}

export default function BlockRecipe({ classEl, icon, description, value }: BlockRecipeProps) {

    return (
        <>
            <div className={classEl}>
                <img src={icon} alt="default icon image" />
                <h4>{description}</h4>
                <p>{value}</p>
            </div>
        </>
    );

}