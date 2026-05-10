// Estra filters in  Search page

//Big componet
import Label from "./label";
import Input from "./input";
import Button from "./button";
import { DropDown } from "./dropdown";
import { useState } from "react";

//section to show extra filters
export default function FiltersCollapse() {

    //get input 
    const [getInput, setInput] = useState("");

    //function click fetch filters 
    const handleSerchFilters = () => {
        console.log("CLICCATO FAI LA FETCH FILTRI");
        console.log("input inserito:" , getInput)
    };
    

    
    return (
        <>
            
        <button className="btn btn-primary" id="filterButton" type="button" data-bs-toggle="collapse"
            data-bs-target="#filterCollapse" aria-expanded="false" aria-controls="filterCollapse">
            Filters
        </button>

        <div className="collapse" id="filterCollapse">
            <form id="filter">
                <div className="card card-body" id="filterSection">
                    <div className="inLine">
                            <DropDown
                                label="TIME"
                                id="time_drop"
                                options={[
                                    { label: "< 10 min", value : "10" },
                                    { label: "< 15 min", value: "15" },
                                    { label: "< 30 min", value : "30"},
                                    { label: "< 60 min", value: "60" },
                                ]}
                                onSelect={(value) => console.log(value)}
                            />
                            
                            <DropDown
                                label="KCALORIES"
                                id="kcal_drop"
                                options={[
                                    { label: "< 200 Kcal", value : "200" },
                                    { label: "< 400 Kcal", value: "400" },
                                    { label: "< 600 Kcal", value : "600"},
                                    { label: "< 800 Kcal", value: "800" },
                                ]}
                                onSelect={(value) => console.log(value)}
                            />

                            <DropDown
                                label="VITAMINS"
                                id="vitamins_drop"
                                options={[
                                    { label: "A", value : "A" },
                                    { label: "B", value: "B" },
                                    { label: "C", value : "C"},
                                    { label: "D", value: "D" },
                                    { label: "E", value : "E"},
                                    { label: "K", value: "K" },
                                ]}
                                onSelect={(value) => console.log(value)}
                            />
                            
                        
                    </div>
                
                    <div className="input-group mb-3">
                            <Label 
                        label = "Ingridient"
                        htmlfor = "search_ingridient"
                        nameClass = "form-control label"
                        />
                        
                            
                        <Input
                            id="search_ingridient"
                            nameClass="form-control input"
                            placeholder="carrots"
                            onChange ={(e: React.ChangeEvent<HTMLInputElement>)=>setInput(e.target.value)}
                        />

                        <Button
                            label="Send"
                            variant="btn btn-primary w-100"
                            onClick={handleSerchFilters}
                        />
                    </div>
                </div>
            </form>
        </div>
        </>
    )

}