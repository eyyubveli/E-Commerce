import React from 'react'

import Instagram from "../../img/footer/instagram.png";
import Facebook from "../../img/footer/Facebook.png";
import Twitter from "../../img/footer/Twitter.png";
import Rupay from "../../img/footer/rupay.png";
import Visa from "../../img/footer/visa.png";
import Cirlce from "../../img/footer/circle.png";
import Badge from "../../img/footer/Compant Badge.png";
import Amex from "../../img/footer/amex.png";
import Logo from "../../img/footer/PAP Logo 1 .png";
import "./Footer.scss";


const Footer = () => {
    return (
        <footer className='footer'>
            <div className="container">
                <div className="footer-wrapper">
                    <div className="footer-left">
                        <img className='footer-logo' src={Logo} alt="Logo" title='Logo' />
                        <nav className='footer-nav'>
                            <div className='footer-box'>
                                <h4 className='footer-box-title'>Quick Links</h4>
                                <div className="footer-content">
                                    <a href="#">About Us</a>
                                    <a href="#">Bulk Order</a>
                                    <a href="#">Gifts</a>
                                    <a href="#">Organic Garden</a>
                                </div>
                            </div>
                            <div className='footer-box'>
                                <h4 className='footer-box-title'>Legal</h4>
                                <div className="footer-content">
                                    <a href="#">T&C</a>
                                    <a href="#">Privacy Policy</a>
                                    <a href="#">Returns </a>
                                    <a href="#">Shipping </a>
                                    <a href="#">Cancellation </a>
                                </div>
                            </div>
                            <div className='footer-box'>
                                <h4 className='footer-box-title'>Support</h4>
                                <div className="footer-content">
                                    <a href="#">FAQs</a>
                                    <a href="#">Contact Us</a>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div className="footer-right">
                        <img src={Badge} alt="Company Badge" title='Company Badge' />

                        <div className="footer-flex">
                            <span>© 2021 Plan A Plant <br />
                                All Rights Reserved</span>
                            <div className="footer-links">
                                <a href="#">
                                    <img src={Facebook} alt="Facebook" title='Facebook' />
                                </a>

                                <a href="#">
                                    <img src={Twitter} alt="Twitter" title='Twitter' />
                                </a>

                                <a href="#">
                                    <img src={Instagram} alt="instagram" title='instagram' />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <h5>We facilitate your payments through trusted gateways</h5>
                <div>
                    <img src={Visa} alt="Visa" title='Visa' />
                    <img src={Cirlce} alt="Cirlce" title='Cirlce' />
                    <img src={Amex} alt="Amex" title='Amex' />
                    <img src={Rupay} alt="Rupay" title='Rupay' />
                </div>
            </div>
        </footer>
    )
}

export default Footer