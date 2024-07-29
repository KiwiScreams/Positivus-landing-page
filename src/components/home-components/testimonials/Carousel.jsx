import { useState } from "react";
import activePoint from "../../../assets/images/home/activePoint.svg";
import point from "../../../assets/images/home/point.svg";
import leftArrow from "../../../assets/images/home/Arrow left.svg";
import rightArrow from "../../../assets/images/home/Arrow right.svg";
import { useRef } from "react";
import { useEffect } from "react";
function Carousel({ slides }) {
    let [current, setCurrent] = useState(0);
    let previousSlide = () => {
        if (current === 0) setCurrent(slides.length - 1);
        else setCurrent(current - 1);
    }
    let nextSlide = () => {
        if (current === slides.length - 1) setCurrent(0);
        else setCurrent(current + 1);
    }
    // const slideRefs = useRef([]);
    // const [activeIndex, setActiveIndex] = useState(0);
    // const [currentSlide, setCurrentSlide] = useState(slides[0]);
    // function handleClick(index) {
    //     setActiveIndex(index);
    //     setCurrentSlide(slides[index]);
    // }

    // const handlePrev = () => {
    //     const prevIndex = (activeIndex - 1 + slides.length) % slides.length;
    //     setActiveIndex(prevIndex);
    //     setCurrentSlide(slides[prevIndex]);
    // };

    // const handleNext = () => {
    //     const nextIndex = (activeIndex + 1) % slides.length;
    //     setActiveIndex(nextIndex);
    //     setCurrentSlide(slides[nextIndex]);
    // };

    return (
        <>
            {/* <div className="carousel-container">
                <div className="slides-container">
                    {slides.map((slide, index) => (
                        <div className="slider" key={index}>
                            <div
                                ref={(ref) => (slideRefs.current[index] = ref)}
                                className={`slide ${activeIndex === index ? "active" : ""}`}
                                onClick={() => handleClick(index)}
                            >
                                <p>"{slide.value}"</p>

                            </div>
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
            </div > */}

            <div className="ahaha">
                <div className={`haha`} style={{
                    transform: `translateX(-${current * 10}%)`,
                    display: "flex",
                    width: `${slides.length * 100}%`
                }}>
                    {slides.map((s, index) => {
                        return (
                            <div key={index} style={{ width: `${100 / slides.length}%` }}>
                                <p>{s.value}</p>
                            </div>)
                    })}
                </div>
                <div>
                    <button onClick={previousSlide}><i className="fa-solid fa-arrow-left"></i></button>
                    <button onClick={nextSlide}><i className="fa-solid fa-arrow-right"></i></button>
                </div>
                <div className="flex" >
                    {slides.map((s, i) => {
                        return (
                            <div key={"circle" + i} className="koko" onClick={() => {
                                setCurrent(i);
                            }}>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
export default Carousel