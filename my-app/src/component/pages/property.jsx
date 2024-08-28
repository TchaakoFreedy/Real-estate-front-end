import React,{useState ,useEffect} from 'react';
import './property.css';
import '../header/Header.css';
import Footer from './Footer';
import img2 from "../assets/img2.jpeg";
import img3 from "../assets/img3.jpeg";
import img4 from "../assets/img4.jpeg";
import img5 from "../assets/img5.jpeg";
import img6 from "../assets/img6.jpeg";
import img7 from "../assets/img7.jpeg";
import logo from '../header/logo.png'; // Import the logo
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { IoPersonSharp, IoPersonAdd } from 'react-icons/io5'; // Import icons
import axios from 'axios';

const raw_properties = [
    {
        id: 1,
        image: img2,
        price: '$400,000',
        location: 'New York, NY',
        rooms: 3,
        bathrooms: 2,
        kitchens: 1,
     
    },
    {
        id: 2,
        image: img3,
        price: '$650,000',
        location: 'Los Angeles, CA',
        rooms: 4,
        bathrooms: 3,
        kitchens: 1,
    },
    {
        id: 3,
        image: img4,
        price: '$550,000',
        location: 'Chicago, IL',
        rooms: 3,
        bathrooms: 2,
        kitchens: 1,
    },
    {
        id: 4,
        image: img5,
        price: '$700,000',
        location: 'Houston, TX',
        rooms: 4,
        bathrooms: 3,
        kitchens: 2,
    },
    {
        id: 5,
        image: img6,
        price: '$850,000',
        location: 'Miami, FL',
        rooms: 5,
        bathrooms: 4,
        kitchens: 2,
    },
    {
        id: 6,
        image: img7,
        price: '$1,200,000',
        location: 'San Francisco, CA',
        rooms: 5,
        bathrooms: 4,
        kitchens: 2,
    },
];



const addProperty = async () => {
    try {
        const response = await axios.post('/my-app/src/component/pages/property.jsx', {
            name: 'newProperty',
            value: 'propertyValue',
        });
        console.log(response.data.message); // logs "Property added successfully"
    } catch (error) {
        console.error('Error adding property:', error);
    }
};

const PropertyCard = ({ property }) => {
    const navigate = useNavigate(); // Use useNavigate hook here

    return (
        <div className="property-card2">
            <div className="property-image-container">
                <img src={property.imageUrl ? 'http://localhost:8086/'+property.imageUrl:property.image} alt="House" className="property-image" />
            </div>
            <div className='property-detail2' >
                <h3>{property.price}</h3>
                <p>Location: {property.location}</p>
                <p>Description: {property.description}</p>

                {/* <p>Rooms: {property.rooms}</p> */}
                {/* <p>Bathrooms: {property.bathrooms}</p> */}
                {/* <p>Kitchens: {property.kitchens}</p> */}
               
                <button className="buy-button">Buy</button>
            </div>
        </div>
    );
};

const PropertyPage = () => {
    const [properties ,setProperties] = useState(raw_properties)

    const navigate = useNavigate(); // Use useNavigate hook here
    useEffect(() => {
    
        async function getProperties(){
            try{
                await fetch('http://localhost:8086/api/properties/')
                .then(res => res.json())
                .then(data => {console.log(data);setProperties(data)})
                .catch(e => console.log(e))
              }catch(e){console.log(e);}
            }
        getProperties()
        
      }, []);
    return (
        <div>
            <div className="header">
                <div className="header__left">
                    <img src={logo} alt="Logo" />
                    <h2>Real Estate</h2>
                </div>

                <div className="header__center">
                    <ul className="header__lists">
                        <li>
                            <a href="#" onClick={(e) => {
                                e.preventDefault();
                                navigate("/Home");
                            }}>Home</a>
                        </li>
                        <li>
                            <a href="#" onClick={(e) => {
                                e.preventDefault();
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
                    <button onClick={() => navigate("/Login")}>
                        <IoPersonSharp /> Login
                    </button>
                    <button onClick={() => navigate("/Register")}>
                        <IoPersonAdd /> Register
                    </button>
                </div>
            </div>

            <div className="property-page2">
                {properties && properties.length!= 0 && properties.map(property => (
                    <PropertyCard key={property.id} property={property} />
                ))}
            </div>
            <div><Footer/></div>
        </div>
    );
};

export default PropertyPage;