import React from "react";
import './footer.css'
import { FaFacebookF } from "react-icons/fa"
import { BsInstagram } from "react-icons/bs"
import { FaTwitter } from "react-icons/fa"

const Footer = () => {
    return  (
        <footer>
            <a href="#" className="footer_logo">BRIANSANGERMANO&copy;</a>

            <ul className="permalinks">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer_socials">
                <a href="https://www.facebook.com/briansangermano/"><FaFacebookF/></a>
                <a href="https://www.instagram.com/sangerbrian"><BsInstagram/></a>
                <a href="https://twitter.com/BrianSanger1"><FaTwitter/></a>
            </div>

            <div className="footer_copyright">
                <small>&copy; BRIANS. All rights reserved.</small>
            </div>
        </footer>
    )
}

export default Footer