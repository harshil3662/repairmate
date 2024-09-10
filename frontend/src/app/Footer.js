import React from 'react'
import '../css/Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className='footer d-flex justify-content-center align-items-center p-2'>
      <div className="footer-content d-flex justify-content-center align-items-center">
        &copy; 2024 Repairmate. All rights reserved. <br/>
        Managed by Harshil Vaghani
      </div>
    </footer>
  )
}

export default Footer