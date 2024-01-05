import React from 'react'
import '../css/Services.css'

function Services({lable,services}) {
  return (
    <div>
      <p className='lable-services'>{lable}</p>
      <div className='service-list'>
        {
          services.map((service)=>{
            return (
              <div className='service'>
                <img src={service.src} alt="" />
                <div className='service-name'>{service.serviceName}</div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Services