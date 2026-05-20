// Estra filters in the Search page

//Big componet

import Label from "./label";
import Input from "./input";
import Button from "./button";
import { DropDown } from "./dropdown";
import { useState } from "react";
import { useRecipesSearch } from "../services/checkStates";
import { StatusPopUp } from "../components/statusPopUp";



//filters in the search page Time, Vitamin.....(Collapse Section)
export default function FiltersCollapse() {
    //get input
    const [getIngridient, setInput] = useState("");
    const [getTime, setTime] = useState("");
    const [getKcal, setKcal] = useState("");
    const [getVitamin, setVitamin] = useState("");
    const { searchWithFilters, loading, error, empty } = useRecipesSearch();


    const handleSerchFilters = async () => {
        if (
            getIngridient === "" &&
            getKcal === "" &&
            getVitamin === "" &&
            getTime === ""
        ) {
            return;
        } else {
            await searchWithFilters({
                ingredient: getIngridient,
                time: getTime,
                kCalories: getKcal,
                vitamin: getVitamin,
            });
        }
    };

    return (
        <>

            <StatusPopUp
                loading={loading}
                error={error}
                empty={empty}
            />

            <button
                className="btn btn-primary"
                id="filterButton"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#filterCollapse"
                aria-expanded="false"
                aria-controls="filterCollapse"
            >
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
                                    { label: "=< 10 min", value: "10" },
                                    { label: "=< 15 min", value: "15" },
                                    { label: "=< 30 min", value: "30" },
                                    { label: "=< 60 min", value: "60" },
                                    { label: "TIME", value: "" },
                                ]}

                                onSelect={(value) => setTime(value)}
                            />

                            <DropDown
                                label="KCALORIES"
                                id="kcal_drop"
                                options={[
                                    { label: "=< 200 Kcal", value: "200" },
                                    { label: "=< 400 Kcal", value: "400" },
                                    { label: "=< 600 Kcal", value: "600" },
                                    { label: "=< 800 Kcal", value: "800" },
                                    { label: "KCALORIES", value: "" },
                                ]}
                                onSelect={(value) => setKcal(value)}
                            />

                            <DropDown
                                label="VITAMINS"
                                id="vitamins_drop"
                                options={[
                                    { label: "A", value: "A" },
                                    { label: "B", value: "B" },
                                    { label: "C", value: "C" },
                                    { label: "D", value: "D" },
                                    { label: "E", value: "E" },
                                    { label: "K", value: "K" },
                                    { label: "VITAMINS", value: "" },
                                ]}
                                onSelect={(value) => setVitamin(value)}
                            />
                        </div>

                        <div className="input-group mb-3">
                            <Label
                                label="Ingridient"
                                htmlfor="search_ingridient"
                                nameClass="form-control label"
                            />

                            <Input
                                id="search_ingridient"
                                nameClass="form-control input"
                                placeholder="carrots"
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                    setInput(e.target.value)
                                }
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
    );
}




























