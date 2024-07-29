import "./Main.css"
import Illustration from "../../../assets/images/home/Illustration.png"
import companyLogo from "../../../assets/images/home/Company logo.svg"
import companyLogo_1 from "../../../assets/images/home/Company logo - 1.svg"
import companyLogo_2 from "../../../assets/images/home/Company logo - 2.svg"
import companyLogo_3 from "../../../assets/images/home/Company logo - 3.svg"
import companyLogo_4 from "../../../assets/images/home/Company logo - 4.svg"
import companyLogo_5 from "../../../assets/images/home/Company logo - 5.svg"

function Main() {
    return (
        <>
            <section className="main-section" id="home">
                <div className="info-container">
                    <h1>Navigating the<br/> digital landscape<br/> for success</h1>
                    <p>Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>
                    <button>Book a consultation</button>
                </div>
                <div className="image-container">
                    <img src={Illustration} alt="" />
                </div>
            </section>
            <section className="image-section">
                <img src={companyLogo} alt="" />
                <img src={companyLogo_1} alt="" />
                <img src={companyLogo_2} alt="" />
                <img src={companyLogo_3} alt="" />
                <img src={companyLogo_4} alt="" />
                <img src={companyLogo_5} alt="" />
            </section>
        </>
    )
}
export default Main