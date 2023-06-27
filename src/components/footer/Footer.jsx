import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
    FaYoutube
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                    Stay up-to-date with the latest movie releases by subscribing to our newsletter and following us on social media.
                </div>
                <div className="socialIcons">
                    <span className="icon">
                        <a href="https://www.linkedin.com/in/dhirenpatil44/" target="_blank" className="link">
                            <FaLinkedin />
                        </a>
                    </span>
                    <span className="icon">
                        <a href="https://twitter.com/dhiren_patil_03" target="_blank" className="link">
                            <FaTwitter />
                        </a>
                    </span>
                    <span className="icon">
                        <a href="https://www.instagram.com/dhiren_patil_03/" target="_blank" className="link">
                            <FaInstagram />
                        </a>
                    </span>
                    <span className="icon">
                        <FaFacebookF />
                    </span>
                    <span className="icon">
                        <FaYoutube />
                    </span>

                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
