import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import {FaTelegramPlane} from "react-icons/fa"
import {BsFacebook,BsTwitter,BsGoogle,BsInstagram,BsLinkedin,BsGithub} from "react-icons/bs"
import {FaMapMarkerAlt,FaPhoneAlt} from "react-icons/fa"
import {IoMailOpenSharp} from "react-icons/io5"
const Footer = () => {
  return (
    <footer className="footer-section">
        <div className="container">
            <div className="footer-cta pt-5 pb-5">
                <div className="row">
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta d-flex">
                            <FaMapMarkerAlt size={30} style={{color:"white"}}/>
                            <div className="cta-text">
                                <h4>Find us</h4>
                                <span>Village Mullahera Sector 22 Gurgaon HR</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta d-flex">
                            <FaPhoneAlt size={30} style={{color:"white"}}/>
                            <div className="cta-text">
                                <h4>Call us</h4>
                                <span>9643315148</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta d-flex">
                            <IoMailOpenSharp size={30} style={{color:"white"}}/>
                            <div className="cta-text">
                                <h4>Mail us</h4>
                                <span>sukhvindrasingh8670@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-content pt-5 pb-5">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 mb-50">
                        <div className="footer-widget">
                            <div className="footer-logo">
                                <Link to="index.html"><img src="https://i.ibb.co/QDy827D/ak-logo.png" className="img-fluid" alt="logo"/></Link>
                            </div>
                            <div className="footer-text">
                                <p>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing
                                elit,Lorem ipsum dolor sit amet.</p>
                            </div>
                            <div className="footer-social-icon mb-3">
                                <span>Follow us</span>
                                <Link to="#"><BsGoogle/></Link>
                                <Link to="#"><BsGithub/></Link>
                                <Link to="#"><BsLinkedin/></Link>
                                <Link to="#"><BsInstagram/></Link>
                                <Link to="#"><BsFacebook/></Link>
                                <Link to="#"><BsTwitter/></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                        <div className="footer-widget">
                            <div className="footer-widget-heading">
                                <h3>Useful Links</h3>
                            </div>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/videos">Videos</Link></li>
                                <li><Link to="/about">about</Link></li>
                                <li><Link to="/login">Sign In</Link></li>
                                <li><Link to="https://codewithsukhii.me">portfolio</Link></li>
                                <li><Link to="/contacts">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                        <div className="footer-widget">
                            <div className="footer-widget-heading">
                                <h3>Subscribe</h3>
                            </div>
                            <div className="footer-text mb-25">
                                <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                            </div>
                            <div className="subscribe-form">
                                <form action="#">
                                    <input type="text" placeholder="Email Address"/>
                                    <button><FaTelegramPlane size={30}/></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="copyright-area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                        <div className="copyright-text">
                            <p>Copyright &copy; 2023, All Right Reserved <Link to="https://codewithsukhii.me">Sukhvindra Singh</Link></p>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                        <div className="footer-menu">
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/videos">Videos</Link></li>
                                <li><Link to="/login">Sign In</Link></li>
                                <li><Link to="#">Policy</Link></li>
                                <li><Link to="/contacts">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;
