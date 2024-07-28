import "./Team.css";
import { useState } from "react";
import person1 from "../../../assets/images/home/team_1.svg"
import person2 from "../../../assets/images/home/team_2.svg"
import person3 from "../../../assets/images/home/team_3.svg"
import person4 from "../../../assets/images/home/team_4.svg"
import person5 from "../../../assets/images/home/team_5.svg"
import person6 from "../../../assets/images/home/team_6.svg"

function Person() {
    const [persons, setPersons] = useState([
        {
            id: 1,
            name: "John Smith",
            image: person1,
            job: "CEO and Founder",
            content: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy"
        },
        {
            id: 2,
            name: "Jane Doe",
            image: person2,
            job: "Director of Operations",
            content: "7+ years of experience in project management and team leadership. Strong organizational and communication skills"
        },
        {
            id: 3,
            name: "Michael Brown",
            image: person3,
            job: "Senior SEO Specialist",
            content: "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization"
        },
        {
            id: 4,
            name: "Emily Johnson",
            image: person4,
            job: "PPC Manager",
            content: "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis"
        },
        {
            id: 5,
            name: "Brian Williams",
            image: person5,
            job: "Social Media Specialist",
            content: "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement"
        },
        {
            id: 6,
            name: "Sarah Kim",
            image: person6,
            job: "Content Creator",
            content: "2+ years of experience in writing and editing Skilled in creating compelling, SEO-optimized content for various industries"
        },
    ]);
    return (
        <>
            {persons.map((person) => (
                <div key={person.id} className="person">
                    <div className="person-info-header">
                        <div className="flex">
                            <img src={person.image} alt="" />
                            <div className="text">
                                <h4>{person.name}</h4>
                                <p>{person.job}</p>
                            </div>
                        </div>
                        <div className="linkedin">in</div>
                    </div>
                    <div className="person-info-text">
                        <p>{person.content}</p>
                    </div>
                </div>
            ))}
        </>
    )
}
export default Person