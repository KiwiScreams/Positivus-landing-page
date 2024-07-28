import Accordion from "./Accordion"
import "./WorkProcess.css"
function WorkProcess() {
    return (
        <>
            <section className="work-section">
                <div className="work-header">
                    <h2>Our Working Process</h2>
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