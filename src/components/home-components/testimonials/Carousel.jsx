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
    return (
        <>
            <div className="carousel-container">
                <div className={`carousel`} style={{
                    transform: `translateX(-${current * 20}%)`,
                    width: `${slides.length * 100}%`
                }}>
                    {slides.map((s, index) => {
                        return (
                            <div key={index} style={{ width: `${100 / slides.length}%` }} className="slide">
                                <p>"{s.value}"</p>
                                <h4 className="name">{s.person}</h4>
                                <h4 className="job">{s.job}</h4>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="carousel-bottom flex">
                <button onClick={previousSlide} disabled={current === null || current === 0} className="arrow-button"><img src={leftArrow} alt="" /></button>

                <div className="flex points">
                    {slides.map((s, i) => {
                        return (
                            <div key={"circle" + i} className="circle" onClick={() => {
                                setCurrent(i);
                            }}>
                                <img src={current === i ? activePoint : point} alt="" />
                            </div>
                        )
                    })}
                </div>
                <button onClick={nextSlide} disabled={current === null || current === slides.length - 1} className="arrow-button"><img src={rightArrow} alt="" /></button>
            </div>
        </>
    )
}
export default Carousel