import "./FreePanel.css"
import image from "../../../assets/images/home/free-proposal.svg"
function FreePanel() {
    return (
        <>
            <section className="panel flex">
                <div className="text">
                    <h3>Let's make things happen</h3>
                    <p>Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</p>
                    <button>Get your free proposal</button>
                </div>
                <div className="image-container">
                    <img src={image} alt="" />
                </div>
            </section>
        </>
    )
}
export default FreePanel