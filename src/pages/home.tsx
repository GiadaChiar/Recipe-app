

import "../style/home.scss";
import { useNavigate } from "react-router-dom";
import Form from "../components/form";
import Button from "../components/button";


// home page 

function Home() {
    const navigate = useNavigate()

    const handleHomeButton = () => {
        navigate("/search")
    }
    return (
    <>
        <div id="home_container">
        <video autoPlay muted loop id="video-index">
            <source
            src={`${import.meta.env.BASE_URL}video/video_recipe.webm`}
            type="video/mp4"
            />
            Your browser does not support the video.
        </video>
        <div className="content">
            <h2 id="texth2">The word of the day is</h2>
            <br />
            <h1 id="texth1">Eat!</h1>
            <p id="textp">This is an undisputed law of well-being</p>
            <div className="d-grid gap-2 col-6 mx-auto">
            <Button
                label="vegetarian recipes"
                onClick={handleHomeButton}
                variant="btn btn-primary"
            />
            </div>
        </div>
        </div>
    </>
    );
}


// structure of Home page
function HomePage() {
    return (
        <>
            <Home />
            <Form />
        </>
    );
}

export default HomePage;


