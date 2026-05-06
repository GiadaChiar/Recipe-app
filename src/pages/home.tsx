

import "../style/home.scss";
import "../style/global.scss";
import { useNavigate } from "react-router-dom";
import Form from "../components/form";
import Button from "../components/button";






function Home() {
    const navigate = useNavigate()

    const handleHomeButton = () => {
        console.log("CLICCATO BOTTONE HOME")
        navigate("/search")
    }
    return (
    <>
        <div id="home_container">
        <video autoPlay muted loop id="video-index">
            <source
            src="../public/video/3195650-uhd_3840_2160_25fps.mp4"
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


