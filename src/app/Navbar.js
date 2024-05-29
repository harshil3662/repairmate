import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Navbar.css'

function Navbar() {
    return (
      <nav>
        <div className='navbar'>
          <div className='container-fluid'>
            <div className='col-5'>
              <div className='row d-flex justify-content-start align-items-center'>
                <div className='container-fluid d-flex justify-content-start align-items-center'>
                  <div className='m-1'>
                    <label className='lable-1 fw-bold fs-2'>Repair</label>
                    <label className='lable-2 fw-bold fs-1'>mate</label>
                  </div>
                  <div className='logo m-1'>
                    <img className='img-fluid' src='/settings.png'/>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-5'>
              <div className='row d-flex justify-content-end align-items-center'>
                <div className='container d-flex justify-content-end align-items-center'>
                  <div className='col-8 d-none d-sm-none d-md-none d-lg-none d-xl-flex d-xxl-flex 
                    justify-content-xl-end justify-content-xxl-end align-items-xl-end align-items-xxl-end m-1'>
                    <span className='line fw-bold p-1 pe-2'>Let's get your</span>
                    <span className="car material-symbols-outlined">toys</span> 
                    <span className='line fw-bold p-1 ps-2'>back on Track</span>
                  </div>
                  <div className='col-2 d-xxl-flex d-xl-flex justify-content-center align-items-center d-none d-sm-none d-md-none d-lg-none'>
                    <Link 
                      className='nav-btn rounded-pill fw-bold d-flex justify-content-center align-items-center' 
                      to='/signin'>
                        <i className="bi bi-box-arrow-in-right fs-5 me-2"></i>
                        <span>Sign In</span>
                    </Link>
                  </div>
                  <div className='col-1 d-flex justify-content-center align-items-center m-1'>
                    <i className="icons bi bi-sliders fs-3"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
}

export default Navbar