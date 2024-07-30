import "./WorkProcess.css"
import { useState, useEffect } from "react"
import plus from "../../../assets/images/home/+.svg"
import minus from "../../../assets/images/home/-.svg"

function Accordion() {
    const [activePanel, setActivePanel] = useState(null);
    const [panels, setPanels] = useState([
        { 
            id: 1, number: "01", title: "Consultation", content: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
        },
        { 
            id: 2, number: "02", title: "Research and Strategy Development",  content: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
        },
        { 
            id: 3, number: "03", title: "Implementation",  content: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
        },
        { 
            id: 4, number: "04", title: "Monitoring and Optimization", content: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
        },
        { 
            id: 5, number: "05", title: "Reporting and Communication",  content: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
        },
        { 
            id: 6, number: "06", title: "Continual Improvement",  content: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
        },
    ]);
    function handleToggle(id) {
        setActivePanel(activePanel === id ? null : id)
    }
    return (
        <>
            <div className="accordion">
                {panels.map((panel) => (
                    <div key={panel.id} className={`accordion-panel ${activePanel === panel.id ? 'accordion-active' : ''}`} onClick={() => handleToggle(panel.id)}>
                        <div
                            className="accordion-header flex">
                            <div className="text flex">
                            <h2>{panel.number}</h2>
                            <h4>{panel.title}</h4>
                            </div>
                            <span className={activePanel === panel.id ? "active" : ""}>
                            </span>
                        </div>
                        {activePanel === panel.id && (
                            <div className="accordion-content">
                                <p>{panel.content}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </>
    )
}
export default Accordion