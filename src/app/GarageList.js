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
      <p className='list-headline fs-1'>{headline}</p>
      <div className='list row d-flex flex-nowrap overflow-scroll mt-2'>
        {
          data.map((garage)=>{
            return(
              <Link to={`/garage/${garage._id}`} state={{garage}} className='col link m-1'>
                <div class="card border-secondary mb-3">
                  <h5 class="card-header border-secondary card-title">{garage.name}</h5>
                  <div class="card-body text-secondary">
                    <h5 class="card-title">Top services</h5>
                    <ul>
                      <li>Auto engine diagnostic</li>
                      <li>Air & cabin filter replacement</li>
                      <li>Electrical</li>
                      <li>Oil change</li>
                      <li>Engine repair</li>
                    </ul>
                  </div>
                  <div class="card-footer bg-transparent border-secondary">Footer</div>
                </div>
              </Link>
            )
          })
        }
      </div>
      {/* <p className='lable-rated'>{headline}</p>
      <div className='garage-list' style={listStyle}>
        {data.map((garage)=>{
            return (
              <Link to={`/garage/${garage._id}`} state={{garage}} className='link'>
                <div className="garage-box" key={garage._id}>
                  <div className='div1'>
                    <div className='garageName'>
                      <p className='gName'>{garage.name}</p>
                    </div>
                    <div className='garageRating'>
                      <div className='garagaRate'>
                        <span class="material-symbols-outlined">star</span>
                        <div className='rate'>4.9</div>
                      </div>
                    </div>
                  </div>
                  <div className='div2'>
                    <p className='location'>{garage.location}, Toronto, On</p>
                  </div>
                  <div className='div3'>
                    <h3>Best at:</h3>
                    <ul className='services'>
                      <li>Auto engine diagnostic</li>
                      <li>Air & cabin filter replacement</li>
                      <li>Electrical</li>
                      <li>Oil change</li>
                      <li>Engine repair</li>
                    </ul>
                  </div>
                  <div className='div4'>
                    <div className='email-box'>
                      <span class="material-symbols-outlined">mail</span>
                      <div className='email'> {garage.email}</div>
                    </div>
                    <div className='number-box'>
                      <span class="material-symbols-outlined">call</span>
                      <div className='number'>(647) 829-0551</div>
                    </div>
                  </div>
                </div>
              </Link>
            )
        })}
      </div> */}
    </div>
  )
}

export default GarageList