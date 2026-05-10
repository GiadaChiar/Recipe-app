// logic to change catts positions


//import FakeCarts from "../components/fakeCarts";
import { useState } from "react";
import RecipeSection from "./cartSectionChoose";


/*
export default function ScrollCarts() {
    const [positions, setPositions] = useState([
        "number1",
        "number2",
        "number3",
        "number4",
        "number5",
    ]);

    const handlebutton = (e: React.MouseEvent<HTMLButtonElement>) => {
        const classButton = e.currentTarget.className;

        if (classButton === "nav prev") {
        setPositions((prev) => {
            const last = prev[prev.length - 1];
            return [last, ...prev.slice(0, -1)];
        });
        } else if (classButton === "nav next") {
        setPositions((prev) => {
            const [first, ...rest] = prev;
            return [...rest, first];
        });
        }
    };

    return (
        <div className="carousel">
        <button onClick={handlebutton} className="nav prev">
            ‹
        </button>

        <div className="deck">
            <FakeCarts positions={positions} />
        </div>

        <button onClick={handlebutton} className="nav next">
            ›
        </button>
        </div>
    );
}

*/






export default function ScrollCarts() {
    const [positions, setPositions] = useState([
        "number1",
        "number2",
        "number3",
        "number4",
        "number5",
    ]);

    const handlebutton = (e: React.MouseEvent<HTMLButtonElement>) => {
        const classButton = e.currentTarget.className;

        if (classButton === "nav prev") {
        setPositions((prev) => {
            const last = prev[prev.length - 1];
            return [last, ...prev.slice(0, -1)];
        });
        } else if (classButton === "nav next") {
        setPositions((prev) => {
            const [first, ...rest] = prev;
            return [...rest, first];
        });
        }
    };

    return (
        <div className="carousel">
        <button onClick={handlebutton} className="nav prev">
            ‹
        </button>

        <div className="deck">
            < RecipeSection positions={positions} />
        </div>

        <button onClick={handlebutton} className="nav next">
            ›
        </button>
        </div>
    );
}




















