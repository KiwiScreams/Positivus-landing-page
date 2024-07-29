import "./Contacts.css";
import contactImage from "../../../assets/images/home/contact.svg"
function Contacts() {
    return (
        <>
            <section className="contacts-section">
                <div className="contacts-header">
                    <h2>Contact Us</h2>
                    <p>Connect with Us: Let's Discuss Your Digital Marketing Needs</p>
                </div>
                <div className="contacts-container flex">
                    <form>
                        <div className="form-header flex">
                            <input type="radio" name="hi" />
                            <label htmlFor="hi">Say Hi</label>
                            <input type="radio" name="quete" />
                            <label htmlFor="hi">Get a Quote</label>
                        </div>
                        <div className="form-body">
                            <div className="inp">
                                <label htmlFor="name">Name</label>
                                <input type="text" name="name" placeholder="Name" />
                            </div>
                            <div className="inp">
                                <label htmlFor="name">Email*</label>
                                <input type="email" name="email" placeholder="Email" />
                            </div>
                            <div className="inp">
                                <label htmlFor="name">Message*</label>
                                <textarea placeholder="Message"></textarea>
                            </div>
                        </div>
                        <button>Send Message</button>
                    </form>
                    <div className="image-container">
                        <img src={contactImage} alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}
export default Contacts