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
          value: "Positivus has been instrumental in transforming Horizon Dynamics' online presence. Their professional approach and effective strategies have significantly enhanced our website traffic and lead volume. The team's genuine interest in our success sets them apart. We enthusiastically recommend Positivus to businesses ready to grow their online impact.",
          person: "Jane Doe",
          job: "Marketing Director at XYZ Corp"
      },
      {
          id: 3,
          value: "Our collaboration with Positivus has yielded outstanding results. Their expertise over the past year has led to a substantial rise in our website visits and lead conversion. The team's commitment and responsiveness are exceptional. For any company aiming to expand their digital reach, Positivus is an excellent choice.",
          person: "Jordan Taylor",
          job: "CEO"
      },
      {
          id: 4,
          value: "Apex Solutions has experienced tremendous growth since partnering with Positivus. Their innovative strategies and attentive service have significantly increased our web traffic and client inquiries. Positivus is a standout team that genuinely prioritizes our success. We strongly recommend them to anyone seeking to elevate their online presence",
          person: "Morgan Reed",
          job: "Marketing Director"
      },
      {
          id: 5,
          value: "Working with Positivus has been a game-changer for Taylor Innovations. Over the past year, their expertise has driven a remarkable boost in our online engagement and lead generation. The team's dedication and professionalism are unmatched. We wholeheartedly endorse Positivus to any business eager to enhance their digital footprint.",
          person: "Alex Carter",
          job: "Head of Digital Strategy"
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