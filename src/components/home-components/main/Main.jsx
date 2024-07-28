import "./Main.css"
import Illustration from "../../../assets/images/home/Illustration.png"
function Main() {
    return (
        <>
            <section className="main-section">
                <div className="info-container">
                    <h1>Navigating the<br/> digital landscape<br/> for success</h1>
                    <p>Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>
                    <button>Book a consultation</button>
                </div>
                <div className="image-container">
                    <img src={Illustration} alt="" />
                </div>
            </section>
        </>
    )
}
export default Main