import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/layout/Navbar.jsx';
import Footer from '../components/layout/Footer.jsx';
const DefaultLayout = () => {
  return (
    <div>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </div>
    )
}
export default DefaultLayout