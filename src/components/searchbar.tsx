//component group defaul serach on Search page in base of recipe's name

import Label from "../components/label";
import Input from "../components/input";
import Button from "./button";
import { useState } from "react";
import { apiKey } from "../redux/store";
import axios from "axios";

//save sesults into redux
import { useDispatch } from "react-redux";
import { setRecipe } from "../redux/recipeSlice";


//serch for recipe's name



/*
export default function SearchBar() {

    const [getInput, setInput] = useState("");

    const dispatch = useDispatch();

    const handleSendFirstBtn = async () => {
        
        console.log("INPUT Nome : ", getInput)
        const res = await axios.get(
            `https://api.spoonacular.com/recipes/complexSearch?diet=vegetarian&query=${getInput}&addRecipeInformation=true&number=1&apiKey=${apiKey}`,
        );

        console.log(res)
        const results = res.data.results
        console.log(results)
        dispatch(selectedRecipe(results));

        
        /*
        results.forEach(async(item) => {
        const code = item.id;
        console.log("il codice è:", code);
            const res =  await axios.get(
            ` https://api.spoonacular.com/recipes/${code}/information?apiKey=${apiKey}`,
            );  

            console.log(res)

            //save recipe in react
            dispatch(selectedRecipe(res));

        localStorage.setItem(code, JSON.stringify(item));
        });
        *//*
};
            
    
    return (
        <>
        <div className="input-group mb-3">
            <Label
            htmlfor="name_search"
            nameClass="form-control label"
            label="Find your recipe"
            ></Label>

            <Input
            id="name_search"
            nameClass="form-control input"
            placeholder="Recipient's username"
            value= {getInput}
            onChange ={(e: React.ChangeEvent<HTMLInputElement>)=>setInput(e.target.value)}
                />
                
            <Button
            label="Send"
            onClick={handleSendFirstBtn}
            variant="btn btn-primary"
                />
                
        </div>
        </>
    );
}

*/









export default function SearchBar() {

    const [getInput, setInput] = useState("");

    const dispatch = useDispatch();

    const handleSendFirstBtn = async () => {
        
        console.log("INPUT Nome : ", getInput)
        const res = await axios.get(
            `https://api.spoonacular.com/recipes/complexSearch?diet=vegetarian&query=${getInput}&addRecipeInformation=true&number=5&apiKey=${apiKey}`,
        );

        console.log(res)
        const results = res.data.results
        console.log(results)
        dispatch(setRecipe(results));

};
            
    
    return (
        <>
        <div className="input-group mb-3">
            <Label
            htmlfor="name_search"
            nameClass="form-control label"
            label="Find your recipe"
            ></Label>

            <Input
            id="name_search"
            nameClass="form-control input"
            placeholder="Recipient's username"
            value= {getInput}
            onChange ={(e: React.ChangeEvent<HTMLInputElement>)=>setInput(e.target.value)}
                />
                
            <Button
            label="Send"
            onClick={handleSendFirstBtn}
            variant="btn btn-primary"
                />
                
        </div>
        </>
    );
}

