import React from 'react';
import "./Agent.css";
import { useNavigate } from "react-router-dom";
import "../header/Header.css";
import logo from "../header/logo.png";
import Footer from "../pages/Footer";
import { IoPersonSharp, IoPersonAdd } from 'react-icons/io5';
import img1 from '../assets/img2.jpeg'

const Agent = () => {
    const navigate = useNavigate();

const Agent = () => {
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
              <a href="#">Agent</a>
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
      
    <div className="agent-container">
      <div className="agent-card">
        <img src={img1} alt="Alice Howard" className="agent-avatar" />
        <h3 className="agent-name">Alice Howard</h3>
        <p className="agent-title">Real Estate - Agent</p>
      </div>
      <div className="agent-card">
        <img src="cynthia-n-moore.png" alt="Cynthia N. Moore" className="agent-avatar" />
        <h3 className="agent-name">Cynthia N. Moore</h3>
        <p className="agent-title">Real Estate - Agent</p>
      </div>
      <div className="agent-card">
        <img src="carl-jones.png" alt="Carl Jones" className="agent-avatar" />
        <h3 className="agent-name">Carl Jones</h3>
        <p className="agent-title">Real Estate - Agent</p>
      </div>
    </div>
    <div><Footer/></div>
 </div>   
  );
};
}

export default Agent;