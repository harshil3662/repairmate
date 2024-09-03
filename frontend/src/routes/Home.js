import GarageList from '../features/GarageList'
import 'leaflet/dist/leaflet.css'
import '../css/Home.css'
import Searchbar from '../features/Searchbar'
import Services from '../features/Services'

function Home() {

  const services = [
    {src:'/car-inspection.png',serviceName:'Car Inspection'},
    {src:'/schedule.png',serviceName:'Periodic Service'},
    {src:'/tire.png',serviceName:'Tyre & Wheel'},
    {src:'/spray-gun.png',serviceName:'Car Painting'},
    {src:'/engine.png',serviceName:'Engine Repairing'},
    {src:'/car-wash.png',serviceName:'Car Washing'},
    {src:'/car-battery.png',serviceName:'Car Batteries'},
    {src:'/interior.png',serviceName:'Interior Issues'}
  ]

  return (
    <div className='container-fluid'>
      <Searchbar/>
      <Services lable={"Popular Car Services"} services={services}/>
      <GarageList headline={"Top Rated Auto Centers"}/>
      <Services lable={"Best from Repairmet experts"} services={services.slice(0,6)}/>
      <GarageList headline={"Best centers of the week"}/>
      <Services lable={"Seasional Services"} services={services.slice(0,5)}/>
      <GarageList headline={"Top of the season"}/>
    </div>
  )
}

export default Home
