import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import Sidebar from './Sidebar'
import '../css/Navbar.css'

function Navbar() {
  const [isOpen,setOpen] = useState(false)

  const isClosed = ()=>{
    setOpen(!isOpen)
  }
    return (
      <>
        <nav className={isOpen ? 'blur-background' : ''}>
          <div className='navbar'>
            <div className='container-fluid'>
              <div className='col-5'>
                <div className='row d-flex justify-content-start align-items-center'>
                  <div className='container-fluid d-flex justify-content-start align-items-center'>
                    <div className='m-1'>
                      <span className='lable-1 fw-bold fs-2'>Repair</span>
                      <span className='lable-2 fw-bold fs-1'>mate</span>
                    </div>
                    <div className='logo m-1'>
                      <img className='img-fluid' src='/repair.png'/>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-5'>
                <div className='row d-flex justify-content-end align-items-center'>
                  <div className='container d-flex justify-content-end align-items-center'>
                    <div className='d-none d-sm-none d-md-none d-lg-none d-xl-flex d-xxl-flex 
                      justify-content-xl-end justify-content-xxl-end align-items-xl-baseline align-items-xxl-baseline'>
                      <span className='line fw-bold p-1 pe-2'>Let's get your</span>
                      <div className='car p-1'>
                        <img className='img-fluid' src='/car-icon.png'/>
                      </div>
                      <span className='line fw-bold p-1 ps-2'>back on Track!!!</span>
                    </div>
                    <div className='d-xxl-flex d-xl-flex justify-content-center align-items-center d-none d-sm-none d-md-none d-lg-none m-2'>
                      <Link 
                        className='nav-btn rounded-pill fw-bold d-flex justify-content-center align-items-center' 
                        to='/signin'>
                          <i className="btn-icons bi bi-box-arrow-in-right fs-5 me-2"></i>
                          <span>Sign In</span>
                      </Link>
                    </div>
                    <div className='d-flex justify-content-center align-items-center m-2'>
                      <i className="menu bi bi-sliders fs-3" onClick={()=>{setOpen(!isOpen)}}></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div className={isOpen ? 'active' : ''}></div>
        {isOpen ? <Sidebar isOpen={isOpen} isClosed={isClosed}/> : <></>}
      </>
    )
}

export default Navbar