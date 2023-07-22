import PropTypes from "prop-types";
import { createContext, useState } from "react";
import githubLogo from "../assets/github.svg";
import arrowGoTo from "../assets/arrowGoTo.svg";

ProjectSlider.propTypes = {
    cardImage: PropTypes.string,
    projectName: PropTypes.string,
    projectDescription: PropTypes.string,
    key: PropTypes.number,
};

export default function ProjectSlider({
    cardImage,
    projectName,
    projectDescription,
    key,
}) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const IndexContext = createContext();

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? key - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === key - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const leftArrowStyles = {
        position: "absolute",
        top: "50%",
        transform: "translate(0, -50%)",
        left: "1rem",
        fontSize: "5rem",
        color: "#fff",
        zIndex: 1,
        cursor: "pointer",
    };

    const rightArrowStyles = {
        position: "absolute",
        top: "50%",
        transform: "translate(0, -50%)",
        right: "1rem",
        fontSize: "5rem",
        color: "#fff",
        zIndex: 1,
        cursor: "pointer",
    };
    return (
        <IndexContext.Provider value={currentIndex}>
            <div className="card">
                <div style={leftArrowStyles} onClick={goToPrevious}>
                    ❰
                </div>
                <div style={rightArrowStyles} onClick={goToNext}>
                    ❱
                </div>
                <img src={cardImage} alt="{cardImage}" className="cardImage" />
                <h4 className="projectName">{projectName}</h4>
                <p>{projectDescription}</p>
                <div className="pagesURL">
                    <a href="" className="githubImage">
                        <img className="githubImage" src={githubLogo} alt="" />
                    </a>
                    <a href="" className="websiteImage">
                        <img className="websiteImage" src={arrowGoTo} alt="" />
                    </a>
                </div>
            </div>
        </IndexContext.Provider>
    );
}
