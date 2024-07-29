import "./Contacts.css";
import { useState, useEffect } from "react";
import contactImage from "../../../assets/images/home/contact.svg"
function Contacts() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');
    const name_regex = /^[a-zA-Z][a-zA-Z0-_]{3,23}$/;
    const email_regex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = {};
        if (!name_regex.test(name)) {
            errors.name = <i className="fa-solid fa-circle-exclamation"></i>;
        } else {
            errors.name = <i className="fa-solid fa-check"></i>;
        }
        if (!email_regex.test(email)) {
            errors.email = <i className="fa-solid fa-circle-exclamation"></i>;
        } else {
            errors.email = <i className="fa-solid fa-check"></i>;
        }
        if (message.trim() === '') {
            errors.message = <i className="fa-solid fa-circle-exclamation"></i>;
        } else {
            errors.message = <i className="fa-solid fa-check"></i>;
        }
        setErrors(errors);
        if (Object.keys(errors).length === 0) {
            setIsSubmitted(true);
            setTimeout(() => {
                setIsSubmitted(false);
                setSuccessMessage('');
                setName('');
                setEmail('');
                setMessage('');
            }, 3000);
        }
    }
    return (
        <>
            <section className="contacts-section">
                <div className="contacts-header">
                    <h2>Contact Us</h2>
                    <p>Connect with Us: Let's Discuss Your Digital Marketing Needs</p>
                </div>
                <div className="contacts-container flex">
                    <div className="form">
                        <div className="form-header flex">
                            <input type="radio" name="radio" />
                            <label htmlFor="hi">Say Hi</label>
                            <input type="radio" name="radio" />
                            <label htmlFor="hi">Get a Quote</label>
                        </div>
                        <div className="form-body">
                            <div className="inp">
                                <label htmlFor="name">Name</label>
                                <input type="text" name="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className={errors.name && errors.name.props.className === 'fa-solid fa-check' ? 'valid' : ''}/>
                                {errors.name && <div className="error">{errors.name}</div>}
                            </div>
                            <div className="inp">
                                <label htmlFor="name">Email*</label>
                                <input type="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className={errors.email && errors.email.props.className === 'fa-solid fa-check' ? 'valid' : ''} />
                                {errors.email && <div className="error">{errors.email}</div>}
                            </div>
                            <div className="inp">
                                <label htmlFor="name">Message*</label>
                                <textarea placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} className={errors.message && errors.message.props.className === 'fa-solid fa-check' ? 'valid' : ''}></textarea>
                                {errors.message && <div className="error">{errors.message}</div>}
                            </div>
                        </div>
                        <button onClick={handleSubmit}>Send Message</button>
                    </div>
                    <div className="image-container">
                        <img src={contactImage} alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}
export default Contacts