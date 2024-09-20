import React from 'react'
import '../css/Services.css'
import { Link } from 'react-router-dom'

function Services({lable,services}) {
  return (
    <div className='services container mt-5'>
      <div className='row'>
        <h1 className='service-header text-center fs-1'>{lable}</h1>
      </div>
      <div className='row'>
        <div className='container d-flex justify-content-xxl-center justify-content-xl-center justify-content-lg-center
          justify-content-md-center align-items-center flex-xxl-wrap flex-xl-wrap flex-lg-wrap flex-md-wrap flex-sm-nowrap
          flex-nowrap overflow-scroll'>
          {
            services.map((service)=>{
              return (
                <Link to={`/services/${service.serviceName}`} className='link'>
                  <div className='service m-3 p-3'>
                    <div className='row'>
                      <img className='img-fluid' src={service.src} alt=""/>
                    </div>
                    <div className='row mt-2'>
                      <div className='svc-name fw-bold'>{service.serviceName}</div>
                    </div>
                  </div>
                </Link>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Services