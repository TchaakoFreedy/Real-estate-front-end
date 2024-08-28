import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Header from './component/header/Header';
import Loginform from './component/loginform/Loginform';
import Registerform from './component/loginform/registration';
import About from './component/pages/about';
import Home from './component/header/Header'
import Contact from './component/pages/contact';
import Property from './component/pages/property'
import Dashboard from './component/Dashboard/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import Agent from './component/pages/Agent';
const router = createBrowserRouter (
  createRoutesFromElements (
    <>
    <Route path='/' element={<Header />} />
    <Route path='/Login' element={<Loginform />} />
    <Route path='/Register' element={<Registerform />} />
    <Route path='/about' element={<About />} />
    <Route path='/home' element={<Home />} />
    <Route path='/contact' element={<Contact />} />
    <Route path='/property' element={<Property />} />
    <Route path='/Dashboard' element={<Dashboard />} />
    <Route path='/Agent' element={<Agent />} />
</>
  )
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
