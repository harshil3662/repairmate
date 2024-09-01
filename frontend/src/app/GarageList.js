import React from 'react'
import {useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import '../css/GarageList.css'

function GarageList({headline}) {
  const data = [
    {_id:1, name:'ABC Automotives and Repair', location:'160, Canon Jackson Dr', phone_no: '9624483190'},
    {_id:2, name:'ABC Automotives and Repair', location:'160, Canon Jackson Dr', phone_no: '9624483190'},
    {_id:3, name:'ABC Automotives and Repair', location:'160, Canon Jackson Dr', phone_no: '9624483190'},
    {_id:4, name:'ABC Automotives and Repair', location:'160, Canon Jackson Dr', phone_no: '9624483190'},
    {_id:5, name:'ABC Automotives and Repair', location:'160, Canon Jackson Dr', phone_no: '9624483190'},
    {_id:6, name:'ABC Automotives and Repair', location:'160, Canon Jackson Dr', phone_no: '9624483190'},
    {_id:7, name:'ABC Automotives and Repair', location:'160, Canon Jackson Dr', phone_no: '9624483190'},
    {_id:8, name:'ABC Automotives and Repair', location:'160, Canon Jackson Dr', phone_no: '9624483190'},
    {_id:9, name:'ABC Automotives and Repair', location:'160, Canon Jackson Dr', phone_no: '9624483190'}
  ]

  return (
    <div className='container-fluid m-2'>
      <h3 className='list-headline fs-1'>{headline}</h3>
      <div className='list row d-flex flex-nowrap overflow-scroll mt-2 p-2'>
        {
          data.map((garage)=>{
            return(
              <Link to={`/garage/${garage._id}`} state={{garage}} className='col link m-1'>
                <div className="card border-secondary">
                  <div className="card-header d-flex justify-content-between align-items-center garage-name pt-2 ps-3">
                    <div className='card-name fs-5'>{garage.name}</div>
                    <div className='d-flex justify-content-center align-items-center'>
                      <span className='me-1'>4.9</span>
                      <i className="bi bi-star-fill"></i>
                    </div>
                  </div>
                  <div className="card-body">
                    <h6 className="top-services-heading ">Top services</h6>
                    <ul className='service-list'>
                      <li>Auto engine diagnostic</li>
                      <li>Air & cabin filter replacement</li>
                      <li>Electrical</li>
                      <li>Oil change</li>
                    </ul>
                  </div>
                  <div className="card-footer bg-transparent border-secondary">
                    <div className='float-start d-flex justify-content-center align-items-center'>
                        <i className="bi bi-geo-alt-fill text-dark me-1"></i>
                        <span>{garage.location}</span>
                    </div>
                    <div className='float-end d-flex justify-content-center align-items-center'>
                      <i className="bi bi-envelope-fill text-dark"></i>
                    </div>
                  </div>
                </div>
              </Link>
            )
          })
        }
      </div>
    </div>
  )
}

export default GarageList