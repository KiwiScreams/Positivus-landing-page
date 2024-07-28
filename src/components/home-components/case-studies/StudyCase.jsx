import "./StudyCase.css"
import arrow from "../../../assets/images/home/arrow.svg"
function StudyCase() {
    return (
        <><section className="case-section">
            <div className="case-header">
                <h2>Case Studies</h2>
                <p>Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies</p>
            </div>
            <div className="case-container flex">
                <div className="case">
                    <p>For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.</p>
                    <button className="flex">Learn more 
                        <img src={arrow} alt="" />
                    </button>
                </div>
                <div className="case">
                    <p>For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.</p>
                    <button className="flex">Learn more 
                        <img src={arrow} alt="" />
                    </button>
                </div>
                <div className="case">
                    <p>For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.</p>
                    <button className="flex">Learn more 
                        <img src={arrow} alt="" />
                    </button>
                </div>
            </div>
        </section>
        </>
    )
}
export default StudyCase