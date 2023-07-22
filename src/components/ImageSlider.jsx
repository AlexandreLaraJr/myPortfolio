import { useState } from "react";

export default function ImageSldier({ slides }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    // const sliderStyles = {
    //     height: "100%",
    //     position: "relative",
    // };

    const slideStyles = {
        width: "100%",
        height: "100%",
        borderRadius: "10px",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: `url(${slides[currentIndex].url})`,
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

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const dotsContainerStyles = {
        display: "flex",
        justifyContent: "center",
    };

    const dotStyles = {
        margin: "0 3px",
        cursor: "pointer",
        fontSize: "20px",
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="sliderStyles">
            <div style={leftArrowStyles} onClick={goToPrevious}>
                ❰
            </div>
            <div style={rightArrowStyles} onClick={goToNext}>
                ❱
            </div>
            <div style={slideStyles}></div>
            <div style={dotsContainerStyles}>
                {slides.map((slide, index) => (
                    <div
                        style={dotStyles}
                        key={index}
                        onClick={() => goToSlide(index)}
                    >
                        •
                    </div>
                ))}
            </div>
        </div>
    );
}