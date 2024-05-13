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
    <div className='container-fluid m-3'>
      <h3 className='list-headline fs-1'>{headline}</h3>
      <div className='list row d-flex flex-nowrap overflow-scroll mt-2 p-2'>
        {
          data.map((garage)=>{
            return(
              <Link to={`/garage/${garage._id}`} state={{garage}} className='col link m-1'>
                <div className="card border-secondary mb-3">
                  <div className="card-header d-flex justify-content-start align-items-center garage-name pt-2 ps-3 fw-bold fs-5">{garage.name}</div>
                  <div className="card-body">
                    <h5 className="card-title">Top services</h5>
                    <ul>
                      <li>Auto engine diagnostic</li>
                      <li>Air & cabin filter replacement</li>
                      <li>Electrical</li>
                      <li>Oil change</li>
                    </ul>
                  </div>
                  <div className="card-footer bg-transparent border-secondary">
                    <div className='float-start d-flex justify-content-center align-items-center'>
                      <div className='location-icon d-flex justify-content-center align-items-center'>
                        <span className="material-symbols-outlined fs-5 pe-1">location_on</span>
                      </div>
                      <div className='location d-flex justify-content-center align-items-center fs-6'>
                        <span>{garage.location}</span>
                      </div>
                    </div>
                    <div className='float-end d-flex justify-content-center align-items-center mail'>
                      <span className="material-symbols-outlined fs-5">mail</span>
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