import React from 'react';
import './Footer.css';
import { useNavigate } from 'react-router-dom';
import { FaFacebookSquare, FaTwitterSquare, FaGooglePlusSquare, FaLinkedin, FaRssSquare } from "react-icons/fa";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="support">
          <h3>Support</h3>
          <ul>
            <li><a href="#">Forum</a></li>
            <li><a href="#">Terms and Condition</a></li>
            <li><a href="#">Frequently Asked Question</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#" onClick={(e) => {
              e.preventDefault();
              navigate("/About");
            }}>About Us</a></li>
            <li><a href="#" onClick={(e) => {
              e.preventDefault();
              navigate("/Property");
            }}>Featured Property</a></li>
            <li><a href="#" onClick={(e) => {
              e.preventDefault();
              navigate("/Contact");
            }}>Contact</a></li>
            <li><a href="#" onClick={(e) => {
              e.preventDefault();
              navigate("/Agent");
            }}>Our Agents</a></li>
          </ul>
        </div>
        <div className="contact-us">
          <h3>Contact Us</h3>
          <p>Face hopital jamou</p>
          <p>+237-690-789-536</p>
          <p>tchaakofreedy8@gmail.com</p>
          <div className="social-media">
            <a href="#" className="facebook"><FaFacebookSquare /></a>
            <a href="#" className="twitter"><FaTwitterSquare /></a>
            <a href="#" className="google-plus"><FaGooglePlusSquare /></a>
            <a href="#" className="linkedin"><FaLinkedin /></a>
            <a href="#" className="rss"><FaRssSquare /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Real Estate Website - Developed By Tchaako Freeby</p>
        <div className="footer-links">
          <a href="#">Privacy & Policy</a>
          <a href="#">Site Map</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;