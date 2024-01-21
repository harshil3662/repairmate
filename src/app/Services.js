import React from 'react'
import '../css/Services.css'
import { Link } from 'react-router-dom'

function Services({lable,services}) {
  return (
    <div>
      <p className='lable-services'>{lable}</p>
      <div className='service-list'>
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
      </div>
    </div>
  )
}

export default Services