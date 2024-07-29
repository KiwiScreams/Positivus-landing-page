import { useState } from "react";
import activePoint from "../../../assets/images/home/activePoint.svg";
import point from "../../../assets/images/home/point.svg";
import leftArrow from "../../../assets/images/home/Arrow left.svg";
import rightArrow from "../../../assets/images/home/Arrow right.svg";
function Carousel() {
    let slides =
        [
            {
                id: 1,
                value: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
                person: "John Smith",
                job: "Marketing Director at XYZ Corp"
            },
            {
                id: 2,
                value: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
                person: "John Smith",
                job: "Marketing Director at XYZ Corp"
            },
            {
                id: 3,
                value: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
                person: "John Smith",
                job: "Marketing Director at XYZ Corp"
            },
            {
                id: 4,
                value: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
                person: "John Smith",
                job: "Marketing Director at XYZ Corp"
            },
            {
                id: 5,
                value: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
                person: "John Smith",
                job: "Marketing Director at XYZ Corp"
            }
        ];
    const [activeIndex, setActiveIndex] = useState(0);
    const [currentSlide, setCurrentSlide] = useState(slides[0]);
    function handleClick(index) {
        setActiveIndex(index);
        setCurrentSlide(slides[index]);
    }

    function handlePrev() {
        const prevIndex = activeIndex - 1;
        if (prevIndex < 0) {
            setActiveIndex(slides.length - 1);
            setCurrentSlide(slides[slides.length - 1]);
        } else {
            setActiveIndex(prevIndex);
            setCurrentSlide(slides[prevIndex]);
        }
    }

    function handleNext() {
        const nextIndex = activeIndex + 1;
        if (nextIndex >= slides.length) {
            setActiveIndex(0);
            setCurrentSlide(slides[0]);
        } else {
            setActiveIndex(nextIndex);
            setCurrentSlide(slides[nextIndex]);
        }
    }
    return (
        <>
            <div className="carousel-container">
                <div className="slides-container">
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className={`slide ${activeIndex === index ? "active" : ""}`}
                            onClick={() => handleClick(index)}
                        >
                            <p>"{slide.value}"</p>
                            <h4>{slide.person}</h4>
                            <h4>{slide.job}</h4>
                        </div>
                    ))}
                </div>
                <div className="flex-row">
                    <button onClick={handlePrev}>
                        <img src={leftArrow} alt="Previous" />
                    </button>
                    {slides.map((data, i) => (
                        <div key={i} onClick={() => handleClick(i)}>
                            <img src={activeIndex === i ? activePoint : point} alt="" />
                        </div>
                    ))}
                    <button onClick={handleNext}>
                        <img src={rightArrow} alt="Next" />
                    </button>
                </div>
            </div>
        </>
    )
}
export default Carousel