import Carousel from "./Carousel"
import "./Testimonials.css"
import { useState } from "react";
function Testimonials() {
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
    return (
        <>
            <section className="testimonials-section">
                <div className="testimonials-header">
                    <h2>Testimonials</h2>
                    <p>Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services</p>
                </div>
                <div className="testimonials-container">
                    <Carousel slides={slides}/>
                </div>
            </section>
        </>
    )
}
export default Testimonials