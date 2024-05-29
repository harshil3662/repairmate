import React from 'react'
import '../css/Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className='footer d-flex justify-content-center align-items-center p-2'>
      <div className="footer-content d-flex justify-content-center align-items-center">
        &copy; 2024 Your Company. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer