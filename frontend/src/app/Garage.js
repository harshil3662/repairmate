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
    {src:'/car-inspection.png',serviceName:'Car Inspection'},
    {src:'/schedule.png',serviceName:'Periodic Service'},
    {src:'/tire.png',serviceName:'Tyre & Wheel'},
    {src:'/spray-gun.png',serviceName:'Car Painting'},
    {src:'/engine.png',serviceName:'Engine Repairing'}
  ]

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className='garage container-fluid'>
      <Searchbar/>
      <div className='col mt-4'>
        <div className='row garage-header position-sticky top-0 p-2 border-bottom d-flex justify-content-between align-items-center'>
          <div className='col-xxl-9 col-xl-9 col-lg-9 col-md-9 col-sm-12 col-12 d-flex justify-content-xxl-start justify-content-xl-start
             justify-content-lg-start justify-content-md-start justify-content-sm-center justify-content-center align-items-center'>
            <div className='d-flex justify-content-center align-items-center'>
              <span className='me-3 garage-name fw-bold fs-3'>{garage.name}</span>
              <span className='me-1'>4.9</span>
              <i className="bi bi-star-fill"></i>
            </div>
          </div>
          <div className='col-xxl-2 col-xl-2 col-lg-3 col-md-3 col-sm-12 col-12 d-flex justify-content-xxl-end justify-content-xl-end 
            justify-content-lg-end justify-content-md-end justify-content-sm-center justify-content-center align-items-center mt-sm-2 mt-2'>
              <div className='experty rounded-pill d-flex justify-content-center align-items-center pt-2 pb-2 ps-3 pe-4'>
                <i className="icons bi bi-award fs-4 me-2"></i>
                <span>Since 1998</span>
              </div>
          </div>
        </div>
        <div className='row p-4'>
          <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 d-flex justify-content-center align-items-center'>
            <div className='detail'>
              <div className='m-2 d-flex justify-content-center align-items-center'>
                <i className="icons me-2 fs-5 bi bi-geo-alt-fill me-1"></i>
                <span className=''>{garage.location}, Toronto, M6M 0B6</span>
              </div>
              <div className='m-2 d-flex justify-content-center align-items-center'>
                <i className="icons me-2 fs-5 bi bi-telephone-fill me-1"></i>
                <span className=''>+1 ({garage.phone_no.slice(0, 3)})-{garage.phone_no.slice(3, 6)} {garage.phone_no.slice(6, 10)}</span>
              </div>
              <div className='ms-2 mt-4 mb-2'>
                {schedule.map((d)=>{
                  return (
                    <div className='row d-flex justify-content-center align-items-center m-1'>
                      <span className={`col-xxl-3 col-xl-3 col-lg-3 col-md-2 colcol-sm-4 col-4 p-1 text-center ${day===d.id ? 'rounded-start border-2 border-start border-top border-bottom' : ''}`}>{d.day}</span>
                      <span className={`col-xxl-3 col-xl-3 col-lg-3 col-md-2 colcol-sm-4 col-4 p-1 text-center ${day===d.id ? 'border-2 border-top border-bottom' : ''}`}>{d.timing}</span>
                      <span className={`col-xxl-3 col-xl-3 col-lg-3 col-md-2 colcol-sm-4 col-4 p-1 text-center ${day===d.id ? 'rounded-end border-2 border-end border-top border-bottom text-success' : ''}`}>{day===d.id ? 'open' : ''}</span>
                    </div>
                  )
                })}
              </div>
              <div className='mt-3 d-flex justify-content-center align-items-center'>
                <div className='social_media rounded-pill d-flex justify-content-center align-items-center p-2'>
                  <a href='' className='media p-1'>
                    <i className="icons bi bi-instagram p-2 fs-3"></i>
                  </a>
                  <a href='' className='media p-1'>
                    <i className="icons bi bi-twitter p-2 fs-3"></i>
                  </a>
                  <a href='' className='media p-1'>
                    <i className="icons bi bi-facebook p-2 fs-3"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 mt-md-5 mt-sm-5 mt-5 d-flex justify-content-center align-items-center'>
            <form className='form p-4'>
              <div className="form-floating m-2">
                <input id='name' name='name' type="text" className="border border-secondary rounded-pill form-control" placeholder='Enter your name' autocomplete="off" />
                <label for="name">Enter your name</label>
              </div>
              <div className="form-floating m-2">
                <input id='car' name='car' type="text" className="border border-secondary rounded-pill form-control" placeholder='Enter car name & model' autocomplete="off"/>
                <label for="car">Enter car name & model</label>
              </div>
              <div onClick={()=>{}} className='p-3 border border-secondary rounded-pill d-flex justify-content-between align-items-center m-2'>
                <label className=''>Select a day</label>
                <span className=''>{date.getDate() + '/' + (date.getMonth()+1) + '/' + date.getFullYear()}</span>
              </div>
              <div className="form-floating m-2">
                <textarea className="border border-secondary rounded-pill form-control" id="issue" placeholder='Define your Issue with the car'></textarea>
                <label for="issue">Define your Issue</label>
              </div>
              <div className='m-2'>
                <button className='p-3 fw-bold schedule-btn rounded-pill d-flex justify-content-center align-items-center' type='submit'>
                  <div className='d-flex justify-content-center align-items-center'>
                    <i className="btn-icons bi bi-calendar-plus-fill"></i>
                    <span className='ms-2'>Schedule</span>
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>
        <hr/>
        <div className='row m-4 p-5 deliverables'>
          <h3 className='service-header text-center fs-1'>Deliverables</h3>
          <div className='row d-flex justify-content-center align-items-center mt-5'>
            <div className='col-xxl-4 col-xl-4 col-lg-5 col-md-6 col-sm-8 col-11 m-2 d-flex justify-content-start align-items-center'>
              <div className='d-flex justify-content-center align-items-center'>
                <i className="icons bi bi-check-circle-fill fs-4 me-2"></i>
                <span className=''>Air & cabin filter replacement</span>
              </div>
            </div>
            <div className='col-xxl-4 col-xl-4 col-lg-5 col-md-6 col-sm-8 col-11 m-2 d-flex justify-content-start align-items-center'>
              <div className='d-flex justify-content-center align-items-center'>
                <i className="icons bi bi-check-circle-fill fs-4 me-2"></i>
                <span className=''>Battery</span>
              </div>
            </div>
            <div className='col-xxl-4 col-xl-4 col-lg-5 col-md-6 col-sm-8 col-11 m-2 d-flex justify-content-start align-items-center'>
              <div className='d-flex justify-content-center align-items-center'>
                <i className="icons bi bi-check-circle-fill fs-4 me-2"></i>
                <span className=''>Electrical</span>
              </div>
            </div>
            <div className='col-xxl-4 col-xl-4 col-lg-5 col-md-6 col-sm-8 col-11 m-2 d-flex justify-content-start align-items-center'>
              <div className='d-flex justify-content-center align-items-center'>
                <i className="icons bi bi-check-circle-fill fs-4 me-2"></i>
                <span className=''>Auto engine diagnostic</span>
              </div>
            </div>
            <div className='col-xxl-4 col-xl-4 col-lg-5 col-md-6 col-sm-8 col-11 m-2 d-flex justify-content-start align-items-center'>
              <div className='d-flex justify-content-center align-items-center'>
                <i className="icons bi bi-check-circle-fill fs-4 me-2"></i>
                <span className=''>Steering & suspension repair</span>
              </div>
            </div>
            <div className='col-xxl-4 col-xl-4 col-lg-5 col-md-6 col-sm-8 col-11 m-2 d-flex justify-content-start align-items-center'>
              <div className='d-flex justify-content-center align-items-center'>
                <i className="icons bi bi-check-circle-fill fs-4 me-2"></i>
                <span className=''>Tires</span>
              </div>
            </div>
            <div className='col-xxl-4 col-xl-4 col-lg-5 col-md-6 col-sm-8 col-11 m-2 d-flex justify-content-start align-items-center'>
              <div className='d-flex justify-content-center align-items-center'>
                <i className="icons bi bi-check-circle-fill fs-4 me-2"></i>
                <span className=''>Oil change</span>
              </div>
            </div>
            <div className='col-xxl-4 col-xl-4 col-lg-5 col-md-6 col-sm-8 col-11 m-2 d-flex justify-content-start align-items-center'>
              <div className='d-flex justify-content-center align-items-center'>
                <i className="icons bi bi-check-circle-fill fs-4 me-2"></i>
                <span className=''>Engine repair</span>
              </div>
            </div>
          </div>
        </div>
        <hr/>
        <div className='row m-4'>
          <Services lable={"Experties"} services={services} />
        </div>
      </div>
    </div>
  )
}

export default Garage