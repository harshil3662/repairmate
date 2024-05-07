import React,{useEffect} from 'react'
import { Outlet, Link } from "react-router-dom"
import Navbar from './Navbar'
import Footer from './Footer'
import '../css/Layout.css'

function Layout() {

  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout