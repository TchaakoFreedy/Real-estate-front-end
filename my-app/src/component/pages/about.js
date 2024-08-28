import React from 'react';
import { useNavigate } from 'react-router-dom'; // Use useNavigate instead of Link
import "../header/Header.css";
import logo from "../header/logo.png";
import "./about.css"
import Footer from "../pages/Footer";
import { IoPersonAdd } from "react-icons/io5";
import { IoPersonSharp } from "react-icons/io5";

const About = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="header">
        <div className="header__left">
          <img src={logo} alt="Logo" /> {/* Use img tag instead of Logo component */}
          <h2>Real Estate</h2>
        </div>

        <div className="header__center">
          <ul className="header__lists">
            <li>
              <a href="#" onClick={(e) => {
              navigate("/Home");
            }}>Home</a>
            </li>
            <li>
              <a href="#" onClick={(e) => {
                navigate("/About");
              }}>About</a>
            </li>
            <li>
              <a href="#" onClick={(e) => {
                e.preventDefault();
                navigate("/Contact");
              }}>Contact</a>
            </li>
            <li>
              <a href="#" onClick={(e) => {
                e.preventDefault();
                navigate("/Property");
              }}>Properties</a>
            </li>
            <li>
              <a href="#" onClick={(e) => {
                e.preventDefault();
                navigate("/Agent");
              }}>Agent</a>
            </li>
          </ul>
        </div>
        <div className="header__right">
          <button
            onClick={(e) => {
              navigate("/Login");
            }}
          >
            <a><IoPersonSharp />login</a>
          </button>
          <button
            onClick={(e) => {
              navigate("/register");
            }}
          >
            <a><IoPersonAdd />Register</a>
          </button>
        </div>
      </div>
      

      
      {/* <div className='image'>
      <img src={img} alt="img" />
      </div> */}
      <div  className='about-text'>

      <section>
        <h2>About Our Company</h2>
        <p>
          We are a leading provider of innovative solutions in the industry.<br/> Our company was founded in 2010 and has since grown to become a trusted partner<br/> for our clients.
          Our mission is to deliver exceptional value and exceed our clients'<br/> expectations through our expertise, dedication, and commitment to excellence.
        </p>
        
        
      </section>
      <section>
        <h2>Why Choose Us?</h2>
    <p>
          <li>Experienced team of professionals</li>
          <li>Commitment to customer satisfaction</li>
          <li>Innovative solutions tailored to your needs</li>
          <li>Competitive pricing and flexible packages</li>
          </p>
      </section>
      </div>
      <div><Footer/></div>

      
    </div>
  );
};

export default About;