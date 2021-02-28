import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from '@fortawesome/free-brands-svg-icons';


import { library } from '@fortawesome/fontawesome-svg-core';

library.add(
    fab,
)


export default function Footer() {
    return (
        <div className="custom-footer mx-2 pt-2" style={{ backgroundColor: "#F8F9FA" }}>
            <Container fluid>
                <Row className="mb-2">
                    <Col md={4} sm={5} style={{ height: "100%", }}>
                        <h4 className=" text-center" >About Us</h4>
                        <p className="list-unstyled text-justify">
                            Big Pillow Inn is a trademark owned and operated by B.G.S Hospitality & Leasing Group headquartered in Pokhara, Nepal. The group also owns and operates F&B brand Belle Lyipa – Nepal’s first croissanterie & fine casual dining outlet
                        </p>

                        <br></br>
                        <h4 className="mt-3 text-center" >
                            VENDOR/SUPPLIERS RELATIONS
                        </h4>
                        <p className=" mx-2 text-color smallerFont" style={{ fontSize: "0.95rem" }}>
                            For procurement queries (all suppliers, contractors, vendors)
                            <strong> info@bigpillowinn.com</strong><br></br>
                            For payments & billing (all DMCs, OTA, Banks)
                            <strong> accounts@bigpillowinn.com</strong><br></br>
                            For jobs (all interns, graduates, professionals)
                            <strong> hr@bigpillowinn.com</strong><br></br>

                        </p>
                    </Col>

                    <Col md={4} sm={2} className="d-flex align-items-center  align-content-evenly  flex-column">
                        <h4 className=" text-center mb-5" style={{}}>Contact us</h4>
                        <ul className="list-inline d-flex justify-content-center w-100" >
                            <li className="list-inline-item mx-4">
                                <a href={"https://www.facebook.com/bigpillowinn/"}>
                                    <FontAwesomeIcon
                                        icon={['fab', 'facebook-f']}
                                        size="2x"
                                        color="#454545"
                                    />
                                </a>
                            </li>
                            <li className="list-inline-item mx-4">
                                <a href={"https://www.instagram.com/bigpillowinn/"}>
                                    <FontAwesomeIcon
                                        icon={['fab', 'instagram']}
                                        size="2x"
                                        color="#454545"
                                    />
                                </a>
                            </li>
                            <li className="list-inline-item mx-4">
                                <a href={"#"}>
                                    <FontAwesomeIcon
                                        icon={['fab', 'twitter']}
                                        size="2x"
                                        color="#454545"
                                    />
                                </a>
                            </li>
                        </ul>

                    </Col>

                    <Col md={4} sm={5} style={{ maxHeight: "40vh" }}>
                        <h4 className=" text-center">Location</h4>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1757.965088313868!2d83.95657461182489!3d28.209433895891035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3995951e8f6f9239%3A0xe809e75063e315e1!2sBig%20Pillow%20Inn!5e0!3m2!1sen!2sin!4v1614327306024!5m2!1sen!2sin" width="100%" height="84%" frameBorder="0" style={{ border: 0 }} allowFullScreen={true} aria-hidden="false" tabIndex="0" title="map"></iframe>
                    </Col>
                </Row>

            </Container>
            <div className="footer-bottom mt-2">
                <p className="text-center">
                    &copy; {new Date().getFullYear()} Big Pillow
                    </p>
            </div>
        </div >
    )
}
