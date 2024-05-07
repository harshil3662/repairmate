import React from 'react'
import '../css/Services.css'
import { Link } from 'react-router-dom'

function Services({lable,services}) {
  return (
    <div className='services container mt-5'>
      <div className='row'>
        <h1 className='lable-services'>{lable}</h1>
      </div>
      <div className='row'>
        <div className='container d-flex justify-content-center align-items-center flex-wrap'>
          {
            services.map((service)=>{
              return (
                <Link to={`/services/${service.serviceName}`} className='link'>
                  <div className='service'>
                    <div className='row'>
                      <img className='img-fluid' src={service.src} alt=""/>
                    </div>
                    <div className='row'>
                      <div className='svc-name'>{service.serviceName}</div>
                    </div>
                  </div>
                </Link>
              )
            })
          }
        </div>
      </div>

      

      {/* <div className='service-list'>
        {
          services.map((service)=>{
            return (
              <Link to={`/services/${service.serviceName}`} className='link'>
                <div className='service'>
                  <img src={service.src} alt="" />
                  <div className='service-name'>{service.serviceName}</div>
                </div>
              </Link>
            )
          })
        }
      </div> */}
    </div>
  )
}

export default Services