import Service from "./Service"
import "./Services.css"
import serviceImage_1 from "../../../assets/images/home/service_1.png"
import serviceImage_2 from "../../../assets/images/home/service_2.svg"
import serviceImage_3 from "../../../assets/images/home/service_3.png"
import serviceImage_4 from "../../../assets/images/home/service_4.png"
import serviceImage_5 from "../../../assets/images/home/service_5.png"
import serviceImage_6 from "../../../assets/images/home/service_6.png"

import arrow_1 from "../../../assets/images/home/arrow_1.png"
import arrow_2 from "../../../assets/images/home/arrow_2.png"
function Services() {
    return (
        <>
            <section className="service-section" id="services">
                <div className="service-header flex">
                    <h2>Services</h2>
                    <p>At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include</p>
                </div>
                <div className="service-container">
                    <Service>
                        <div className="text">
                            <div className="name">
                                <h3>Search engine</h3>
                                <h3>optimization</h3>
                            </div>
                            <div className="learn-btn">
                                <img src={arrow_1} alt="" />Learn more
                            </div>
                        </div>
                        <div className="service-image">
                            <img src={serviceImage_1} alt="" />
                        </div>
                    </Service>
                    <Service>
                        <div className="text">
                            <div className="name">
                                <h3>Pay-per-click</h3>
                                <h3>advertising</h3>
                            </div>
                            <div className="learn-btn">
                                <img src={arrow_1} alt="" />Learn more
                            </div>
                        </div>
                        <div className="service-image">
                            <img src={serviceImage_2} alt="" />
                        </div>
                    </Service>
                    <Service>
                        <div className="text">
                            <div className="name">
                                <h3>Social Media</h3>
                                <h3>Marketing</h3>
                            </div>
                            <div className="learn-btn">
                                <img src={arrow_2} alt="" />Learn more
                            </div>
                        </div>
                        <div className="service-image">
                            <img src={serviceImage_3} alt="" />
                        </div>
                    </Service>
                    <Service>
                        <div className="text">
                            <div className="name">
                                <h3>Email</h3>
                                <h3>Marketing</h3>
                            </div>
                            <div className="learn-btn">
                                <img src={arrow_1} alt="" />Learn more
                            </div>
                        </div>
                        <div className="service-image">
                            <img src={serviceImage_4} alt="" />
                        </div>
                    </Service>
                    <Service>
                        <div className="text">
                            <div className="name">
                                <h3>Content</h3>
                                <h3>Creation</h3>
                            </div>
                            <div className="learn-btn">
                                <img src={arrow_1} alt="" />Learn more
                            </div>
                        </div>
                        <div className="service-image">
                            <img src={serviceImage_5} alt="" />
                        </div>
                    </Service>
                    <Service>
                        <div className="text">
                            <div className="name">
                                <h3>Analytics and</h3>
                                <h3>Tracking</h3>
                            </div>
                            <div className="learn-btn">
                                <img src={arrow_2} alt="" />Learn more
                            </div>
                        </div>
                        <div className="service-image">
                            <img src={serviceImage_6} alt="" />
                        </div>
                    </Service>
                </div>
            </section>
        </>
    )
}
export default Services