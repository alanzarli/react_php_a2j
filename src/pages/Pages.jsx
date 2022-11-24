import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Renovation from "./Renovation";
import Actualites from './Actualites';
import Contact from './Contact';
import Create from '../components/Create';
import Update from '../components/Update';
import ListUsers from '../components/ListUsers';
import Login from '../components/Login';
import Dashboard from './Dashboard';

const Pages = () => {

    const location = useLocation();

  return (
        <Routes location={location} key={location.pathname}> 
          <Route  path="" element={<Home />} />
          <Route path="/pages/home" element={<Home />} />
          <Route path="/pages/about" element={<About />} />
          <Route path="/pages/renovation" element={<Renovation />} />
          <Route path="/pages/actualites" element={<Actualites />} />
          <Route path="/pages/contact" element={<Contact />} />
          <Route path="dashboard/create" element={<Create />} />
          <Route path="dashboard/userlist/:id/update" element={<Update />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/userlist" element={<ListUsers />} />
          <Route path="/login" element={<Login />} />
        </Routes>
  )
}

export default Pages
