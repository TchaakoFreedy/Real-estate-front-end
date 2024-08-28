import React from "react";
import { useNavigate } from "react-router-dom";
import "../header/Header.css";
import logo from "../header/logo.png";
import { IoPersonAdd } from "react-icons/io5";
import { IoPersonSharp } from "react-icons/io5";
import "./contact.css"
import Footer from "../pages/Footer";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  const navigate = useNavigate();

  return (
    <div >
      <div className="header" >
        <div className="header__left">
          <img src={logo} alt="Logo" />
          <h2>Real Estate</h2>
        </div>

        <div className="header__center">
          <ul className="header__lists">
            <li>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/Home");
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/About");
                }}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/Contact");
                }}
              >
                Contact
              </a>
            </li>
            <li>
              <a href="#" onClick={(e) => {
                e.preventDefault();
                navigate("/Property");
              }}>Properties</a>
            </li>
            <li>
              <a href="#">Agent</a>
            </li>
          </ul>
        </div>
        <div className="header__right">
          <button
            onClick={(e) => {
              e.preventDefault();
              navigate("/Login");
            }}
          >
            <a>
              <IoPersonSharp />
              login
            </a>
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              navigate("/register");
            }}
          >
            <a>
              <IoPersonAdd />
              Register
            </a>
          </button>
        </div>
      </div>
      <div class="first-div">
      <section>
       
          <div className="contact-info1">
          <div className="contact-container">
          <h2>Contact Us</h2>
          <p>
          <h3 ><FaLocationDot />     Adress</h3>
          <li>

          Face hopital Jamot
          </li>
          <h3 ><BsFillTelephoneFill />   Call us</h3>
          <li>

         +237-690-789-536
          </li>
          <h3 ><MdEmail />  Email Adress</h3>
          <li>

          tchaakofreedy@gmail.com
          </li>
          </p> 
          </div>
          </div>
          </section>

      <div className="container">

        <form class="form-container">
        <h2>Get in touch</h2>
          <div class="message">
              <input
                type="text"
                placeholder="Enter your name"
                id="name"
                name="name"
                required
                class="form-field"
              />
              <input
                type="email"
                placeholder="Enter your email"
                id="email"
                name="email"
                required
                class="form-field"
              />
              <input
                type="text"
                placeholder="Phone"
                id="phone"
                name="phone"
                required
                class="form-field"
              />
              <textarea
                id="message" className="text-message"
                placeholder="Write your message here"
                name="message"
                required
                class="form-field"
              ></textarea>
              <button type="submit" class="form-button">
                Send Message
              </button>
          
          </div>
        </form>
      </div>

      </div>
      <div><Footer/></div>
       </div>
  );
};

export default Contact;
