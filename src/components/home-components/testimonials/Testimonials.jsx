import Carousel from "./Carousel"
import "./Testimonials.css"
import { useState } from "react";
function Testimonials() {
    const slides = [
        {
          id: 1,
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.",
        },
        {
          id: 2,
          text: "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        },
        {
          id: 3,
          text: "Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        },
        {
          id: 4,
          text: "Maecenas sed diam eget risus varius blandit sit amet non magna. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        },
        {
          id: 5,
          text: "Etiam porta sem malesuada magna mollis euismod. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        },
      ];
    return (
        <>
            <section className="testimonials-section">
                <div className="testimonials-header">
                    <h2>Testimonials</h2>
                    <p>Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services</p>
                </div>
                <div className="testimonials-container">
                    <Carousel />
                </div>
            </section>
        </>
    )
}
export default Testimonials