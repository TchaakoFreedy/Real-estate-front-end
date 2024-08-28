import React, { useState, useEffect } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { BsThreeDots } from 'react-icons/bs';
import { FaHome, FaBuilding, FaUsers, FaCog } from 'react-icons/fa';
import { Button, Modal, Form } from 'react-bootstrap';

import { Link } from 'react-router-dom';
import './Dashboard.css';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';


// Register required components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const [propertyData, setPropertyData] = useState([]);
  const [bookingData, setBookingData] = useState([]);
  const [showAddPropertyModal, setShowAddPropertyModal] = useState(false);
  const [newProperty, setNewProperty] = useState({
    name: '',
    price: '',
    room:'',
    Bathroom:'',
    Kitchen:'',
    location: '',
    description: '',
    image: '', // New field for image,
    type:''
  });
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  useEffect(() => {
    
    async function getProperties(){
      await fetch('http://localhost:8086/api/properties/')
      .then(res => res.json())
      .then(data => {console.log(data);setPropertyData(data)})
      .catch(e => console.log(e))
    }

    getProperties()
    
  }, []);

  const handleShowAddPropertyModal = () => setShowAddPropertyModal(true);
  const handleCloseAddPropertyModal = () => setShowAddPropertyModal(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewProperty({ ...newProperty, [name]: value });
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setNewProperty({ ...newProperty, image: file });
    }
  };


  const handleAddProperty = async () => {
    try {
      // Save the property locally to mimic a database add.
      // setPropertyData([...propertyData, newProperty]);

      const formData = new FormData()
      formData.append("file" ,newProperty.image)
      console.log(formData);

      const response = await fetch('http://localhost:8086/api/properties/create-property',{
        method:'post',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify({...newProperty})

      })  
      console.log(response);
      if(response.ok){
        const data = await response.json()
        console.log(data);
        await fetch(`http://localhost:8086/api/properties/upload-file/${data.id}`,{
          method:'post',
          body:formData
        })
        // setPropertyData({})
        alert("Property added correctly")
      }else{
        alert("Operation failed")
      }


      // Reset the newProperty state after addition
      // setNewProperty({
      //   name: '',
      //   price: '',
      //   room:'',
      //    Bathroom:'',
      //   Kitchen:'',
      //   location: '',
      //   description: '',
      //   image: ''
      // });

      handleCloseAddPropertyModal();
    } catch (error) {
      console.error('Error adding property', error);
    }
  };

  const handleDeleteProperty = async(index) => {
    await fetch('http://localhost:8086/api/properties/'+index ,{
      method:'delete'
    })

    const updatedProperties = propertyData.filter((p, i) => p.id !== index);
    setPropertyData(updatedProperties);
  };

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };
  const propertyChartData = {
    labels: propertyData.map((property) => property.name),
    datasets: [
      {
        label: 'Property Prices',
        data: propertyData.map((property) => property.price),
        backgroundColor: '#00ccffcc', // blue
        borderColor: '#FFFFFF', // White
        borderWidth: 2,
      },
    ],
  };

  const bookingChartData = {
    labels: bookingData.map((booking) => booking.date),
    datasets: [
      {
        label: 'Bookings Per Day',
        data: bookingData.map((booking) => booking.count),
        backgroundColor: ' #60ee54e0', // green
        borderColor: '#FFFFFF', // White
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className={`AdminDashboard-container ${isSidebarCollapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-container">
        <div className="sidebar-header">
          <button className="collapse-button" onClick={toggleSidebar}>
            <BsThreeDots /> {/* Replaced with three dots */}
          </button>
        </div>
        <div className="nav-item">
          <Link to="/">
            <FaHome className="nav-icon" /> Home
          </Link>
        </div>
        <div className="nav-item">
          <Link to="/properties">
            <FaBuilding className="nav-icon" /> Properties
          </Link>
        </div>
        <div className="nav-item">
          <Link to="/users">
            <FaUsers className="nav-icon" /> Users
          </Link>
        </div>
        <div className="nav-item">
          <Link to="/settings">
            <FaCog className="nav-icon" /> Settings
          </Link>
        </div>
      </div>

      <div className="content">
        <div className="header-container">
          <h1>Welcome, Tchaako!!!</h1>
          <div className="user-profile">
            
            <span>Admin</span>
          </div>
        </div>

        <div className="cards-container">
          <div className="card" onClick={handleShowAddPropertyModal}>
            <h3>Add Property</h3>
            <p>Click to add a new property.</p>
            
          </div>
          
          {/* <div className="card" >
            <h3>see map</h3>
            <p>Click to zoom.</p>
            {PropertyMap}
          </div> */}
          
          <div className="card">
            <h3>Total Properties</h3>
            <p>{propertyData.length} Properties</p>
          </div>
          <div className="card">
            <h3>Total Bookings</h3>
            <p>{bookingData.length} Bookings</p>
          </div>
          <div className="card">
            <h3>Revenue</h3>
            <p>5,000,000 XAF</p>
          </div>
        </div>

        <div className="property-list">
          {propertyData.map((property, index) => {
            {/* console.log(`http://localhost:8086/${property.image_url}`) */}
            return(
            <div key={index} className="property-card">
              <img src={`http://localhost:8086/${property.imageUrl}`} alt={property.name} className="property-image" />
              <div className="property-details">
                <h4>{property.name}</h4>
                <p>{property.location}</p>
                <p>${property.price}</p>
                <p>{property.description}</p>
                <button onClick={()=>handleDeleteProperty(property.id)}>delete</button>
                <button onClick={()=>{setNewProperty(property);setShowAddPropertyModal(true)}}>Update</button>
              </div>
            </div>
          )})}
        </div>

        {/* Chart Section remains unchanged */}
        <div className="charts-container">
          <div className="chart-item">
            <h3>Property Prices</h3>
            <Bar data={propertyChartData} />
          </div>
          <div className="chart-item">
            <h3>Bookings Over Time</h3>
            <Line data={bookingChartData} />
          </div>
        </div>


      </div>

      <Modal show={showAddPropertyModal} onHide={handleCloseAddPropertyModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Property</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formPropertyName">
              <Form.Label>Property Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter property name"
                name="name"
                value={newProperty.name}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formPropertyPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter property price"
                name="price"
                value={newProperty.price}
                onChange={handleInputChange}
              />

            </Form.Group>
            <Form.Group controlId="formPropertyLocation">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter property location"
                name="location"
                value={newProperty.location}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formPropertyLocation">
              <Form.Label>Type</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter property location"
                name="type"
                value={newProperty.type}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formPropertyDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter property description"
                name="description"
                value={newProperty.description}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formPropertyImage">
              <Form.Label>Property Image</Form.Label>
              <Form.Control
                type="file"
                name="image"
                accept="image/*"
                onChange={handleImageChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseAddPropertyModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddProperty}>
            Add Property
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Dashboard;
