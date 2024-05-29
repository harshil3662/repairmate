import React from 'react'
import {useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import '../css/GarageList.css'

function GarageList({headline}) {
  const [data,setData] = useState([])

  useEffect(()=>{
    fetch('http://localhost:8080/garages')
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok')
          }
          return response.json()
        })
        .then((responseData) => {
          setData(responseData.list)
        })
        .catch((err) => {
          console.log(err)
        })
  },[data])

  return (
    <div className='container-fluid m-2'>
      <h3 className='list-headline fs-1'>{headline}</h3>
      <div className='list row d-flex flex-nowrap overflow-scroll mt-2 p-2'>
        {
          data.map((garage)=>{
            return(
              <Link to={`/garage/${garage._id}`} state={{garage}} className='col link m-1'>
                <div className="card border-secondary">
                  <div className="card-header d-flex justify-content-between align-items-center garage-name pt-2 ps-3 fw-bold">
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
                      <div className='location-icon d-flex justify-content-center align-items-center'>
                        <i className="bi bi-geo-alt-fill text-dark me-1"></i>
                      </div>
                      <div className='location d-flex justify-content-center align-items-center fs-6'>
                        <span>{garage.location}</span>
                      </div>
                    </div>
                    <div className='float-end d-flex justify-content-center align-items-center mail'>
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