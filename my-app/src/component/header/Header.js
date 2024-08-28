import React from "react";
import "./Header.css";
import logo from "./logo.png";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import zillhms1 from "../assets/zillhms1.jpg";
import { IoIosHome, } from "react-icons/io";
import { GiHouseKeys } from "react-icons/gi"
 import { MdLiveHelp } from "react-icons/md";
 import { FaBuilding } from "react-icons/fa";
 import { IoPersonAdd } from "react-icons/io5";
 import { IoPersonSharp } from "react-icons/io5";
 import { GoDiscussionClosed } from "react-icons/go";
 import { FcSurvey } from "react-icons/fc";
 import { FaRegHandshake } from "react-icons/fa";
 import { TbRosetteNumber1 } from "react-icons/tb";
 import { FaHouseCircleCheck } from "react-icons/fa6";
 import { PiNumberCircleOneDuotone,  PiNumberCircleTwoDuotone, PiNumberCircleThreeDuotone  } from "react-icons/pi";
 import { IoPerson } from "react-icons/io5";
 import Footer from "../pages/Footer";

const Logo = () => {
  return (
    <div>
      <img src={logo} alt="Logo" />
    </div>
  );
};
const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="main-component">
      <div className="header">
        <div className="header__left">
          <Logo />
          <h2>Real Estate</h2>
        </div>

        <div header__center>
          <ul className="header__lists">
            <li>
              <a href="#" onClick={(e) => {
              navigate("/Home");
            }}>Home</a>
            </li>
            <li>
              <a href="#"  onClick={(e) => {
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
            <li>
              <a href="#" onClick={(e) => {
                e.preventDefault();
                navigate("/Dashboard");
              }}>My account</a>
            </li>
          </ul>
        </div>
        <div className="header__right">
          <button
            onClick={(e) => {
              navigate("/login");
            }}
          >
            <a> <IoPersonSharp />login</a>
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
      <div className="main-background">
        <div className="background">
          <div className="blackout"></div>
          <div className="drop">
            <span style={{ border: "solid 0px red" }}>
              <h1 className="text">let us</h1>
              <h1>guide you home</h1>
            </span>
            <div className="filters">
              <select className="drop-type">
                <option value={""}>Select type</option>
                <option value={"appartment"}>Appartment</option>
                <option value={"room"}>Building</option>
                <option value={"House"}>House</option>
                <option value={"Villa"}>Villa</option>
                <option value={"Land"}>Land</option>
                <option value={"Office"}>Office</option>
              </select>
              <select className="drop-type">
                <option value={""}>Select statuts</option>
                <option value={"Rent"}>Rent</option>
                <option value={"Buy"}>Buy</option>
                <option value={"Apply for landtitle"}>
                  Apply for landtitle
                </option>
              </select>
              <div className="">
                <input
                  type="text"
                  name="city"
                  className="input"
                  placeholder="Enter city"
                ></input>
              </div>
              <div className="search-btn">
                <button type="submit" className="btn1" name="filter">
                  Search Property
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="step1">
          <h2 className="what-we-do">What we do</h2>

          <div className="text-box1">
            <div className="row">
              <div className="col">
                <div className="text">
                  <i className="text-center" aria-hidden="true"></i>
                  <IoIosHome style={{ width: '70px', height: '70px' }}/>
                  <h4 >
                   Selling service
                  </h4>
                  <p>
                    Terre sans frontier vous <br /> offre les services de ventes
                    <br />
                    De terrain
                    <br />
                    De maison
                    <br />
                    D'imeuble
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="text">
                  <i className="text-center" aria-hidden="true"></i>
                  <GiHouseKeys style={{ width: '70px', height: '70px' }}/>

                  <h4 text-secondary>
               Rental service
                  </h4>
                  <p>
                    Terre sans frontier vous <br /> offre les services de
                    location
                    <br />
                    De terrain
                    <br />
                    De maison
                    <br />
                    D'imeuble
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="text">
                  <i className="text-center" aria-hidden="true"></i>
                  <MdLiveHelp style={{ width: '70px', height: '70px' }}/> 
                  <h4 text-secondary>
                    Asistance et conseil
                  </h4>
                  <p>
                    Terre sans frontier vous <br /> offre les services de ventes
                    <br />
                    De terrain
                    <br />
                    De maison
                    <br />
                    D'imeuble
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="text">
                  <i className="text-center" aria-hidden="true"></i>
                  <FaBuilding style={{ width: '70px', height: '70px' }}/>
                  <h4 text-secondary>
                   Gestion d'immeubles
                  </h4>
                  <p>
                    Terre sans frontier vous <br /> offre les services de ventes
                    <br />
                    De terrain
                    <br />
                    De maison
                    <br />
                    D'imeuble
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="step2">
          <h2>Recent Properties</h2>
          <div className="property-card1">
            <div className="property-image1">
              <img src={zillhms1} alt="" />
              <div className="property-state1">New</div>
              <div className="property-statuts1">For sale</div>
            </div>
            <div className="property-detail1">
              <h3 className="property-title1">Zills Home</h3>
              <p className="property-address1">39 Bailey Drive</p>
              <div className="property-info1">
                <div className="info-item">
                  <div className="info">
                    <span className="info-value">1869</span>
                    <span className="info-label">
                      <p>Sqft:</p>
                    </span>
                    <span className="info-label">Sqft:</span>
                    <span className="info-value">
                      <p>1869</p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="step3">
        <div className="why-choose-us">
        <h1>Why Choose us</h1>
      <div className="section">
        <div className="icon">
        <TbRosetteNumber1 style={{ width: '70px', height: '70px', color: "green" }}/>
        </div>
        <div className="texte">
          <h2>Top Rated</h2>
          <p>This is a dummy text for filling out spaces. This is just a dummy text for filling out blank spaces.</p>
        </div>
      </div>
      <div className="section">
        <div className="icon">
        <FaHouseCircleCheck style={{ width: '70px', height: '70px', color: "green" }}/>
        </div>
        <div className="texte">
        <h2>Experience Quality</h2>
          <p>This is a dummy text for filling out spaces. This is just a dummy text for filling out blank spaces.</p>
        </div>
      </div>
      <div className="section">
        <div className="icon">
        <IoPerson style={{ width: '70px', height: '70px', color: "green" }}/>
        </div>
        <div className="texte">
          <h2>Experienced Agents</h2>
          <p>This is a dummy text for filling out spaces. This is just a dummy text for filling out blank spaces.</p>
        </div>
      </div>
    </div>
        </div>
        <div  className="step4">
        <h1>How it works</h1>
        <div className="how-it-works">
      <div className="section">
        <div className="icon">
        <PiNumberCircleOneDuotone style={{ width: '50px', height: '50px' }}/>
        <GoDiscussionClosed style={{ width: '100px', height: '100px' }} />
        </div>
        <h3>Discussion</h3>
        <p>
          Nascetur cubilia sociosqu aliquet ut elit nascetur nullam
          duis incidfunt nisi non quisque vestibulum platea ornare
          ridiculus.
        </p>
      </div>
      <div className="section">
        <div className="icon">
        <PiNumberCircleTwoDuotone style={{ width: '50px', height: '50px' }}/>
        <FcSurvey style={{ width: '100px', height: '100px' }}/>
        </div>
        <h3>Files Review</h3>
        <p>
          Nascetur cubilia sociosqu aliquet ut elit nascetur nullam
          duis incidfunt nisi non quisque vestibulum platea ornare
          ridiculus.
        </p>
      </div>
      <div className="section">
        <div className="icon">
        <PiNumberCircleThreeDuotone  style={{ width: '50px', height: '50px' }}/>
        <FaRegHandshake style={{ width: '100px', height: '100px' }}/>
        </div>
        <h3>Acquire</h3>
        <p>
          Nascetur cubilia sociosqu aliquet ut elit nascetur nullam
          duis incidfunt nisi non quisque vestibulum platea ornare
          ridiculus.
        </p>
      </div>
   
        </div>

        </div>
        <div className="step10"> <Footer/></div>
      </div>
    </div>
  );
};

export default Header;
