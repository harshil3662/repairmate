import React from 'react'
import { Outlet, Link } from "react-router-dom"
import Navbar from './Navbar'
import Footer from './Footer'
import '../css/Layout.css'

function Layout() {
  return (
    <div className="container">
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout