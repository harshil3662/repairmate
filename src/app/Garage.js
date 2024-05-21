import React,{useEffect,useState} from 'react'
import Searchbar from './Searchbar'
import Services from './Services'
import { useLocation} from "react-router-dom"
import '../css/Garage.css'

function Garage() {
  const date = new Date();
  const day = date.getDay();
  const location = useLocation();
  const { garage } = location.state;
  const [schedule,setSchedule] = useState(
    [
      {day:'Sunday',timing:'6am - 10pm',id:0},
      {day:'Monday',timing:'6am - 10pm',id:1},
      {day:'Tuesday',timing:'6am - 10pm',id:2},
      {day:'Wednesday',timing:'6am - 10pm',id:3},
      {day:'Thursday',timing:'6am - 10pm',id:4},
      {day:'Friday',timing:'6am - 10pm',id:5},
      {day:'Saturday',timing:'6am - 10pm',id:6}
      
    ]
  )

  const services = [
    {src:'/car.png',serviceName:'Car Inspection'},
    {src:'/schedule.png',serviceName:'Periodic Service'},
    {src:'/tire.png',serviceName:'Tyre & Wheel'},
    {src:'/spray-gun.png',serviceName:'Car Painting'},
    {src:'/engine.png',serviceName:'Engine Repairing'}
  ]

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className='container-fluid'>
      <Searchbar/>
      <div className='garage col mt-4'>
        <div className='row garage-header position-sticky top-0 p-2 border-bottom d-flex justify-content-between align-items-center'>
          <div className='col-9 d-flex justify-content-start align-items-center'>
            <span className='me-3 fw-bold fs-3'>{garage.name}</span>
            <span className='fs-5'>4.9</span>
            <span className="icons material-symbols-outlined">grade</span>
          </div>
          <div className='col-xxl-1 col-xl-2 col-lg-2 col-md-2 col-sm-3 col-3 d-flex flex-column justify-content-end align-items-center'>
            <div className=''>
              <img className='img img-fluid' src='/medal.png' alt=""/>
            </div>
            <span className=''>Since 1998</span>
          </div>
        </div>
        <div className='row m-4'>
          <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 d-flex justify-content-center align-items-center'>
            <div>
              <div className='m-2 d-flex justify-content-start align-items-center'>
                <span class="icons me-2 fs-5 material-symbols-outlined">location_on</span>
                <span className='fs-5'>160 Canon Jackson Dr, York, Toronto, M6M 0B6</span>
              </div>
              <div className='m-2 d-flex justify-content-start align-items-center'>
                <span class="icons me-2 fs-5 material-symbols-outlined">call</span>
                <span className='fs-5'>+1 ({garage.phone_no.slice(0, 3)})-{garage.phone_no.slice(3, 6)} {garage.phone_no.slice(6, 10)}</span>
              </div>
              <div className='ms-2 mt-4 mb-2'>
                {schedule.map((d)=>{
                  return (
                    <div className='row m-1'>
                      <span className={`col-3 p-1 text-center ${day===d.id ? 'rounded-start border-2 border-start border-top border-bottom' : ''}`}>{d.day}</span>
                      <span className={`col-3 p-1 text-center ${day===d.id ? 'border-2 border-top border-bottom' : ''}`}>{d.timing}</span>
                      <span className={`col-3 p-1 text-center ${day===d.id ? 'rounded-end border-2 border-end border-top border-bottom text-success' : ''}`}>{day===d.id ? 'open' : ''}</span>
                    </div>
                  )
                })}
              </div>
              <div className='mt-3 d-flex justify-content-center align-items-center'>
                <a href='#' className='m-2'>
                  <img className='img-fluid img' src="/twitter.png" alt="twitter" />
                </a>
                <a href='#' className='m-2'>
                  <img className='img-fluid img' src="/facebook.png" alt="facebook" />
                </a>
                <a href='#' className='m-2'>
                  <img className='img-fluid img' src="/instagram.png" alt="instagram" />
                </a>
              </div>
            </div>
          </div>
          <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 d-flex justify-content-center align-items-center'>
            <form className='form'>
              <div className="input-group-lg m-2">
                <input id='name' name='name' type="text" className="form-control" placeholder='Enter your name' />
              </div>
              <div className="input-group-lg m-2">
                <input id='car' name='car' type="text" className="form-control" placeholder='Enter car name & model' />
              </div>
              <div onClick={()=>{}} className='p-3 fs-5 border rounded d-flex justify-content-between align-items-center m-2'>
                <label className=''>Select a day</label>
                <span className=''>{date.getDate() + '/' + (date.getMonth()+1) + '/' + date.getFullYear()}</span>
              </div>
              <div className="m-2">
                <textarea className="fs-5 form-control" id="" placeholder='Define your Issue with the car'></textarea>
              </div>
              <div className='m-2'>
                <button className='p-2 fs-5 fw-bold schedule-btn rounded' type='submit'>Schedule</button>
              </div>
            </form>
          </div>
        </div>
        <div className='row m-4 border-top'>
          <h3 className='service-header fs-1 m-5'>Deliverables</h3>
          <div className='row d-flex justify-content-center align-items-center'>
            <div className='col-4 m-2 d-flex justify-content-start align-items-center'>
              <div className='d-flex justify-content-center align-items-center'>
                <span class="tick material-symbols-outlined me-2">check_circle</span>
                <span className=''>Air & cabin filter replacement</span>
              </div>
            </div>
            <div className='col-4 m-2 d-flex justify-content-start align-items-center'>
              <div className='d-flex justify-content-center align-items-center'>
                <span class="tick material-symbols-outlined me-2">check_circle</span>
                <span className=''>Battery</span>
              </div>
            </div>
            <div className='col-4 m-2 d-flex justify-content-start align-items-center'>
              <div className='d-flex justify-content-center align-items-center'>
                <span class="tick material-symbols-outlined me-2">check_circle</span>
                <span className=''>Electrical</span>
              </div>
            </div>
            <div className='col-4 m-2 d-flex justify-content-start align-items-center'>
              <div className='d-flex justify-content-center align-items-center'>
                <span class="tick material-symbols-outlined me-2">check_circle</span>
                <span className=''>Auto engine diagnostic</span>
              </div>
            </div>
            <div className='col-4 m-2 d-flex justify-content-start align-items-center'>
              <div className='d-flex justify-content-center align-items-center'>
                <span class="tick material-symbols-outlined me-2">check_circle</span>
                <span className=''>Steering & suspension repair</span>
              </div>
            </div>
            <div className='col-4 m-2 d-flex justify-content-start align-items-center'>
              <div className='d-flex justify-content-center align-items-center'>
                <span class="tick material-symbols-outlined me-2">check_circle</span>
                <span className=''>Tires</span>
              </div>
            </div>
            <div className='col-4 m-2 d-flex justify-content-start align-items-center'>
              <div className='d-flex justify-content-center align-items-center'>
                <span class="tick material-symbols-outlined me-2">check_circle</span>
                <span className=''>Oil change</span>
              </div>
            </div>
            <div className='col-4 m-2 d-flex justify-content-start align-items-center'>
              <div className='d-flex justify-content-center align-items-center'>
                <span class="tick material-symbols-outlined me-2">check_circle</span>
                <span className=''>Engine repair</span>
              </div>
            </div>
          </div>
        </div>
        <div className='row m-4 border-top'>
          <Services lable={"Experties"} services={services} />
        </div>
      </div>
    </div>
  )
}

export default Garage