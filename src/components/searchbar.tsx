//component group defaul serach on Search page

import Label from "../components/label";
import Input from "../components/input";
import Button from "./button";
import { useState } from "react";
import { apiKey } from "../redux/store";
import axios from "axios";



//serch for recipe's name




export default function SearchBar() {

    const [getInput, setInput] = useState("");

    const handleSendFirstBtn = async () => {
        
        console.log("INPUT Nome : ", getInput)
        const res = await axios.get(
            `https://api.spoonacular.com/recipes/complexSearch?diet=vegetarian&query=${getInput}&number=3&apiKey=${apiKey}`,
        )
        
        const result = res.data.results;
        
        result.forEach((item) => {
        const code = item.id;

        console.log("il codice è:", code);

        localStorage.setItem(code, JSON.stringify(item));
    });
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

