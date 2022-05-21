import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneVolume, faEnvelope, faMapMarkedAlt, faClock } from '@fortawesome/free-solid-svg-icons';
import google from '../../../images/icons/google.png';
import facebook from '../../../images/icons/facebook.PNG';
import instagram from '../../../images/icons/instagram.PNG';
import linkedin from '../../../images/icons/linkedin.PNG';

const Footer = () => {
    const getCurrentYear = () => {
        return new Date().getFullYear();
    };
    return (
        <div>
            <div className="mt-5">
                <footer
                    className="text-center text-lg-start text-dark"
                    style={{ backgroundColor: "#ECEFF1" }}
                >
                    <section
                        style={{ backgroundColor: "#0d6cfe" }}
                    >
                        <div className="container d-flex justify-content-between p-4 text-white">
                            <div className="me-5">
                                <span>Get connected with us on social networks:</span>
                            </div>
                            <div>
                                <a href="www.google.com" className="text-white me-4">
                                    <img className='scalable-img' style={{ width: '30px' }} src={google} alt="" />
                                </a>
                                <a href="www.facebook.com" className="text-white me-4">
                                    <img className='scalable-img' style={{ width: '30px' }} src={facebook} alt="" />
                                </a>
                                <a href="www.instagram.com" className="text-white me-4">
                                    <img className='scalable-img' style={{ width: '30px' }} src={instagram} alt="" />
                                </a>
                                <a href="www.linkedin.com" className="text-white me-4">
                                    <img className='scalable-img' style={{ width: '30px' }} src={linkedin} alt="" />
                                </a>
                            </div>
                        </div>
                    </section>

                    <section className="">
                        <div className="container text-center text-md-start mt-5">
                            <div className="row mt-3">
                                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                    <h6 className="text-uppercase fw-bold">Gadget Zone</h6>
                                    <hr
                                        className="mb-4 mt-0 d-inline-block mx-auto"
                                        style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }}
                                    />
                                    <p>
                                        We are constantly expanding our product range as well as improving our service quality. We offer the best selection of quality products that you can buy online or purchase from our outlets. Stay connected and stay tuned for new exciting products.
                                    </p>
                                </div>

                                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                    <h6 className="text-uppercase fw-bold">Customer Service</h6>
                                    <hr
                                        className="mb-4 mt-0 d-inline-block mx-auto"
                                        style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }}
                                    />
                                    <p>
                                        <a href="#!" className="text-dark">
                                            Contact Us
                                        </a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-dark">
                                            Help and Advice
                                        </a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-dark">
                                            Shipping and Returns
                                        </a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-dark">
                                            Terms and Conditions
                                        </a>
                                    </p>
                                </div>

                                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                    <h6 className="text-uppercase fw-bold">Other Informations</h6>
                                    <hr
                                        className="mb-4 mt-0 d-inline-block mx-auto"
                                        style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }}
                                    />
                                    <p>
                                        <a href="#!" className="text-dark">
                                            About Us
                                        </a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-dark">
                                            Payments and Returns
                                        </a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-dark">
                                            Shipping Rates
                                        </a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-dark">
                                            Refund Policy
                                        </a>
                                    </p>
                                </div>

                                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                    <h6 className="text-uppercase fw-bold">Contact</h6>
                                    <hr
                                        className="mb-4 mt-0 d-inline-block mx-auto"
                                        style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }}
                                    />
                                    <p>
                                        <FontAwesomeIcon className='mx-2' icon={faPhoneVolume}></FontAwesomeIcon> (+612) 2531 5600
                                    </p>
                                    <p>
                                        <FontAwesomeIcon className='mx-2' icon={faEnvelope}></FontAwesomeIcon> gadgetzone@gmail.com
                                    </p>
                                    <p>
                                        <FontAwesomeIcon className='mx-2' icon={faMapMarkedAlt}></FontAwesomeIcon> PO Box 1622 Elephant Road West
                                    </p>
                                    <p>
                                        <FontAwesomeIcon className='mx-2' icon={faClock}></FontAwesomeIcon> Opening Hours : 8.00AM - 21.00AM
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div
                        className="text-center p-3"
                        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
                    >
                        <span>Copyright @{getCurrentYear()} | </span>
                        <a className="text-dark" href="https://mdbootstrap.com/">
                            Gadget Zone
                        </a>
                        <span>. All Rights Reserved</span>
                    </div>
                </footer>
            </div>
        </div>
    );
};
export default Footer;