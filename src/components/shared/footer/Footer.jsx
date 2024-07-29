import whiteLogo from "../../../assets/images/home/whiteLogo.svg";
import social_1 from "../../../assets/images/home/social_1.svg";
import social_2 from "../../../assets/images/home/social_2.svg";
import social_3 from "../../../assets/images/home/social_3.svg";
import { Link } from "react-scroll";
import "./Footer.css"
function Footer() {
    return (
        <>
            <footer>
                <div className="footer-header flex">
                    <h1><Link to="home" spy={true} smooth={true} offset={-100} duration={500}><img src={whiteLogo} /></Link></h1>
                    <div className="footer-links">
                        <ul className="flex">
                            <li><Link to="aboutus" spy={true} smooth={true} offset={-100} duration={500}>About us</Link></li>
                            <li><Link to="services" spy={true} smooth={true} offset={-100} duration={500}>Services</Link></li>
                            <li><Link to="cases" spy={true} smooth={true} offset={-100} duration={500}>Use Cases</Link></li>
                            <li><Link>Pricing</Link></li>
                            <li><Link to="team" spy={true} smooth={true} offset={-100} duration={500}>Blog</Link></li>
                        </ul>
                    </div>
                    <div className="footer-social-links flex">
                        <img src={social_1} alt="" />
                        <img src={social_2} alt="" />
                        <img src={social_3} alt="" />
                    </div>
                </div>
                <div className="footer-body flex">
                    <div className="contact-info">
                        <h4>Contact us:</h4>
                        <p>Email: info@positivus.com</p>
                        <p>Phone: 555-567-8901</p>
                        <p>Address: 1234 Main St
                            <br />
                        Moonstone City, Stardust State 12345</p>
                    </div>
                    <div className="subscribe flex">
                        <input type="email" name="subsscribeEmail" placeholder="Email"/>
                        <button>Subscribe to news</button>
                    </div>
                </div>
                <div className="footer-bottom flex">
                    <p>© 2023 Positivus. All Rights Reserved.</p>
                    <ul className="flex">
                        <li>Privacy</li>
                        <li>Policy</li>
                    </ul>
                </div>
            </footer>
        </>
    )
}
export default Footer