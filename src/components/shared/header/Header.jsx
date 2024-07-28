import textLogo from "../../../assets/images/core/TextLogo.svg"
import NavBtn from "../NavBtn"
import "./Header.css"
function Header() {
    return (
        <>
            <header>
                <div className="header">
                    <nav className="flex">
                        <h1><img src={textLogo} alt="" /></h1>
                        <ul className="flex">
                            <NavBtn link="About us"></NavBtn>
                            <NavBtn link="Services"></NavBtn>
                            <NavBtn link="Use Cases"></NavBtn>
                            <NavBtn link="Pricing"></NavBtn>
                            <NavBtn link="Blog"></NavBtn>
                            <button className="request-btn">Request a quote</button>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}
export default Header