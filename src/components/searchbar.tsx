//component group defaul serach on Search page in base of recipe's name

import Label from "../components/label";
import Input from "../components/input";
import Button from "./button";
import { useState } from "react";
import { useRecipesSearch } from "../services/checkStates";
import { StatusPopUp } from "./statusPopUp";

//serach by recipe's name

export default function SearchBar() {
    const [getInput, setInput] = useState("");
    const { searchByName, loading, error, empty } = useRecipesSearch();

    const handleSendFirstBtn = async () => {
        if (getInput === "") return;

        await searchByName(getInput);
    };
    return (
        <>
            <StatusPopUp loading={loading} error={error} empty={empty} />

            <div className="input-group mb-3">
                <Label
                    htmlfor="name_search"
                    nameClass="form-control label"
                    label="Find your recipe"
                ></Label>

                <Input
                    id="name_search"
                    nameClass="form-control input"
                    placeholder="Recipe's name"
                    value={getInput}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setInput(e.target.value)
                    }
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
