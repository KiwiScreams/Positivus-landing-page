import textLogo from "../../../assets/images/core/TextLogo.svg"
import "./Header.css"
import { Link } from "react-scroll"
import { useState, useEffect } from "react"
function Header() {
    const [color, setColor] = useState(false)
    const changeColor = () => {
        if (window.scrollY >= 90) {
            setColor(true)
        }
        else {
            setColor(false)
        }
    }
    window.addEventListener('scroll', changeColor);
    return (
        <>
            <header className={color ? 'header-bg' : ''}>
                <div className="header">
                    <nav className="flex">
                        <h1><Link to="home" spy={true} smooth={true} offset={-100} duration={500}><img src={textLogo} alt="" /></Link></h1>
                        <ul className="flex">
                            <li><Link to="aboutus" spy={true} smooth={true} offset={-100} duration={500}>About us</Link></li>
                            <li><Link to="services" spy={true} smooth={true} offset={-100} duration={500}>Services</Link></li>
                            <li><Link to="cases" spy={true} smooth={true} offset={-100} duration={500}>Use Cases</Link></li>
                            <li><Link to="" spy={true} smooth={true} offset={50} duration={500}>Pricing</Link></li>
                            <li><Link to="team" spy={true} smooth={true} offset={-100} duration={500}>Blog</Link></li>
                            <button className="request-btn">Request a quote</button>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}
export default Header