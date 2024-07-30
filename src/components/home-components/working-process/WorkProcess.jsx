import Accordion from "./Accordion"
import "./WorkProcess.css"
function WorkProcess() {
    return (
        <>
            <section className="work-section" id="aboutus">
                <div className="work-header">
                    <h2><span className="process">Our Working</span> <span className="process">Process</span></h2>
                    <p>Step-by-Step Guide to Achieving Your Business Goals</p>
                </div>
                <div className="work-container flex">
                    <Accordion />
                </div>
            </section>
        </>
    )
}
export default WorkProcess